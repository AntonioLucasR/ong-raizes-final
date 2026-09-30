# Gera a versão de produção do site na pasta dist/:
# CSS e JavaScript unidos e minificados, HTML enxuto e imagens copiadas.
# Uso: powershell -ExecutionPolicy Bypass -File scripts/build.ps1

$ErrorActionPreference = 'Stop'
$raiz = Split-Path -Parent $PSScriptRoot
$dist = Join-Path $raiz 'dist'
$utf8 = New-Object System.Text.UTF8Encoding($false)

function Ler($caminho) {
    [IO.File]::ReadAllText((Join-Path $raiz $caminho), $utf8)
}

function Gravar($caminho, $texto) {
    $destino = Join-Path $dist $caminho
    New-Item -ItemType Directory -Force (Split-Path $destino) | Out-Null
    [IO.File]::WriteAllText($destino, $texto, $utf8)
}

function MinificarCss($css) {
    $css = [regex]::Replace($css, '/\*.*?\*/', '', 'Singleline')
    $css = [regex]::Replace($css, '\s+', ' ')
    $css = [regex]::Replace($css, '\s*([{};,>])\s*', '$1')
    return ($css -replace ';}', '}').Trim()
}

function MinificarJs($js) {
    $linhas = $js -split "`r?`n" |
        ForEach-Object { $_.Trim() } |
        Where-Object { $_ -ne '' -and -not $_.StartsWith('//') -and $_ -notmatch '^/\*.*\*/$' }
    return $linhas -join "`n"
}

function Tamanho($caminho) {
    (Get-Item (Join-Path $dist $caminho)).Length
}

if (Test-Path $dist) { Remove-Item -Recurse -Force $dist }
New-Item -ItemType Directory -Force $dist | Out-Null

# CSS: reset + estilos em um único arquivo
$cssOriginal = (Ler 'css/reset.css') + "`n" + (Ler 'css/styles.css')
Gravar 'css/app.min.css' (MinificarCss $cssOriginal)

# JavaScript: usa a mesma ordem de scripts do html/index.html
$html = Ler 'html/index.html'
$arquivosJs = [regex]::Matches($html, '<script src="\.\./(js/[^"]+)"></script>') | ForEach-Object { $_.Groups[1].Value }
$jsOriginal = ($arquivosJs | ForEach-Object { Ler $_ }) -join "`n"
$jsFinal = (MinificarJs $jsOriginal) -replace '\.\./imagens/', 'imagens/'
Gravar 'js/app.min.js' $jsFinal

# HTML: troca os arquivos de desenvolvimento pelos arquivos de produção
$html = [regex]::Replace($html, '\s*<link rel="stylesheet" href="\.\./css/[^"]+">', '')
$html = [regex]::Replace($html, '\s*<script src="\.\./js/[^"]+"></script>', '')
$html = $html.Replace('</head>', '  <link rel="stylesheet" href="css/app.min.css">' + "`n" + '</head>')
$html = $html.Replace('</body>', '  <script src="js/app.min.js"></script>' + "`n" + '</body>')
$html = [regex]::Replace($html, '<!--.*?-->', '', 'Singleline')
$linhasHtml = $html -split "`r?`n" | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne '' }
Gravar 'index.html' ($linhasHtml -join "`n")

# Imagens: reduz para 960 px de largura e comprime em WebP (usa o ffmpeg quando existir)
$origem = Join-Path $raiz 'imagens/muda-nas-maos.webp'
$destino = Join-Path $dist 'imagens/muda-nas-maos.webp'
New-Item -ItemType Directory -Force (Split-Path $destino) | Out-Null
if (Get-Command ffmpeg -ErrorAction SilentlyContinue) {
    ffmpeg -y -loglevel error -i $origem -vf "scale=960:-2" -c:v libwebp -quality 75 $destino
} else {
    Write-Host 'ffmpeg nao encontrado: imagem copiada sem compressao' -ForegroundColor Yellow
    Copy-Item $origem $destino
}

Write-Host ''
Write-Host 'Build concluido em dist/' -ForegroundColor Green
Write-Host ('  CSS : {0:N0} -> {1:N0} bytes' -f $cssOriginal.Length, (Tamanho 'css/app.min.css'))
Write-Host ('  JS  : {0:N0} -> {1:N0} bytes' -f $jsOriginal.Length, (Tamanho 'js/app.min.js'))
Write-Host ('  IMG : {0:N0} -> {1:N0} bytes' -f (Get-Item $origem).Length, (Tamanho 'imagens/muda-nas-maos.webp'))
