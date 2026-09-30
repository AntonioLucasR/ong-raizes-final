# Deploy local: gera o build e publica a pasta dist/ em um servidor HTTP local,
# com compressao gzip, cache e cabecalhos de seguranca, como em producao.
# Uso: powershell -ExecutionPolicy Bypass -File scripts/deploy.ps1 [-Porta 8080]
# Para encerrar, pressione Ctrl+C.

param([int]$Porta = 8080)

$ErrorActionPreference = 'Stop'
$raiz = Split-Path -Parent $PSScriptRoot
$dist = Join-Path $raiz 'dist'

& (Join-Path $PSScriptRoot 'build.ps1')

$tipos = @{
    '.html' = 'text/html; charset=utf-8'
    '.css'  = 'text/css; charset=utf-8'
    '.js'   = 'text/javascript; charset=utf-8'
    '.webp' = 'image/webp'
    '.jpg'  = 'image/jpeg'
    '.png'  = 'image/png'
    '.svg'  = 'image/svg+xml'
    '.ico'  = 'image/x-icon'
}
$comprimiveis = @('.html', '.css', '.js', '.svg')

$servidor = New-Object System.Net.HttpListener
$servidor.Prefixes.Add("http://localhost:$Porta/")
$servidor.Start()
Write-Host ''
Write-Host "Site publicado em http://localhost:$Porta/  (Ctrl+C para encerrar)" -ForegroundColor Green

try {
    while ($servidor.IsListening) {
        $contexto = $servidor.GetContext()
        $resposta = $contexto.Response
        try {
            $caminho = $contexto.Request.Url.LocalPath
            if ($caminho -eq '/') { $caminho = '/index.html' }

            $arquivo = [IO.Path]::GetFullPath((Join-Path $dist $caminho.TrimStart('/')))
            if ($arquivo.StartsWith($dist) -and (Test-Path $arquivo -PathType Leaf)) {
                $ext = [IO.Path]::GetExtension($arquivo).ToLower()
                $bytes = [IO.File]::ReadAllBytes($arquivo)
                $resposta.ContentType = $(if ($tipos.ContainsKey($ext)) { $tipos[$ext] } else { 'application/octet-stream' })
                $resposta.AddHeader('X-Content-Type-Options', 'nosniff')
                $resposta.AddHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
                $resposta.AddHeader('X-Frame-Options', 'SAMEORIGIN')
                $resposta.AddHeader('Cache-Control', $(if ($ext -eq '.html') { 'no-cache' } else { 'public, max-age=3600' }))

                $aceitaGzip = "$($contexto.Request.Headers['Accept-Encoding'])" -match 'gzip'
                if ($aceitaGzip -and ($comprimiveis -contains $ext)) {
                    $memoria = New-Object IO.MemoryStream
                    $gzip = New-Object IO.Compression.GZipStream($memoria, [IO.Compression.CompressionMode]::Compress)
                    $gzip.Write($bytes, 0, $bytes.Length)
                    $gzip.Close()
                    $bytes = $memoria.ToArray()
                    $resposta.AddHeader('Content-Encoding', 'gzip')
                }
                $resposta.ContentLength64 = $bytes.Length
                if ($contexto.Request.HttpMethod -ne 'HEAD') {
                    $resposta.OutputStream.Write($bytes, 0, $bytes.Length)
                }
            } else {
                $resposta.StatusCode = 404
        }
        } catch {
            Write-Host ("Erro ao responder: " + $_.Exception.Message) -ForegroundColor Yellow
        } finally {
            $resposta.Close()
        }
    }
} finally {
    $servidor.Stop()
}
