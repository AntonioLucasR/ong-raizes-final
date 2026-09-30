# Instituto Raízes do Amanhã

Site institucional de uma ONG fictícia, feito como uma **Single Page Application** em HTML, CSS e JavaScript puro, com Bootstrap 5 nas janelas e avisos. Traz três páginas (início, projetos e cadastro), formulário com validação e armazenamento local, acessibilidade no nível AA da WCAG 2.1 e uma versão de produção otimizada.

> Projeto acadêmico de Desenvolvimento Front-end. Todas as informações da ONG (nomes, números, CNPJ) são fictícias.

## Índice

1. [Requisitos](#requisitos)
2. [Instalação](#instalação)
3. [Utilização](#utilização)
4. [Estrutura de pastas](#estrutura-de-pastas)
5. [Fluxo de trabalho com Git](#fluxo-de-trabalho-com-git)
6. [Acessibilidade](#acessibilidade)
7. [Desempenho e produção](#desempenho-e-produção)
8. [Manutenção](#manutenção)

## Requisitos

| Item | Para quê | Obrigatório |
|---|---|---|
| Navegador atual (Chrome, Edge ou Firefox) | Abrir o site | Sim |
| Internet | Carregar o Bootstrap pelo CDN | Sim |
| Git | Controle de versões | Sim, para contribuir |
| Windows PowerShell 5.1 ou superior | Rodar `build.ps1` e `deploy.ps1` | Sim, para gerar a versão de produção |
| ffmpeg | Comprimir a imagem durante o build | Não (sem ele, a imagem é copiada sem compressão) |

## Instalação

```bash
git clone <caminho-ou-url-do-repositorio> ong-raizes-final
cd ong-raizes-final
git checkout develop
```

Não há dependências para instalar: o projeto não usa `npm`. O Bootstrap 5.3.3 é carregado por CDN.

## Utilização

### Ver o site em desenvolvimento

Abra o arquivo `html/index.html` no navegador (duplo clique). Os scripts são comuns, sem `import`, então funciona direto do arquivo, sem servidor.

### Rodar os testes automáticos

Abra `html/testes.html`. A página executa 25 testes das máscaras, da validação, dos templates e do armazenamento e mostra quantos passaram.

### Gerar a versão de produção

```bash
powershell -ExecutionPolicy Bypass -File scripts/build.ps1
```

Cria a pasta `dist/` com um único CSS e um único JS minificados, HTML enxuto e a imagem comprimida. Ao final, mostra o tamanho antes e depois de cada arquivo.

### Publicar localmente (deploy)

```bash
powershell -ExecutionPolicy Bypass -File scripts/deploy.ps1
```

Roda o build e publica `dist/` em `http://localhost:8080/`, com compressão gzip, cache e cabeçalhos de segurança. Use `-Porta 3000` para trocar a porta e `Ctrl+C` para encerrar.

> O deploy é apenas local. O projeto não é publicado em nenhum serviço externo.

## Estrutura de pastas

```
ong-raizes-final/
├── html/
│   ├── index.html         Página única da aplicação (SPA)
│   └── testes.html        Testes automáticos
├── css/
│   ├── reset.css          Zera margens e uniformiza elementos
│   └── styles.css         Variáveis, grid de 12 colunas e componentes
├── js/
│   ├── dados.js           Conteúdo do site (projetos, valores, perguntas)
│   ├── main.js            Liga os módulos ao carregar a página
│   ├── modules/           Um arquivo por responsabilidade
│   │   ├── roteador.js      Navegação por hash (#/pagina/secao)
│   │   ├── templates.js     Funções que geram trechos de HTML
│   │   ├── paginas.js       Monta cada página com os templates
│   │   ├── formulario.js    Eventos, máscaras e envio do cadastro
│   │   ├── validacao.js     Regras de validação dos campos
│   │   ├── mascaras.js      Máscaras de CPF, telefone e CEP
│   │   ├── armazenamento.js localStorage (rascunho e cadastros)
│   │   └── avisos.js        Avisos (toast do Bootstrap)
│   └── testes/testes.js   Testes automáticos
├── imagens/               Foto do projeto (.webp e .jpg)
├── scripts/
│   ├── build.ps1          Gera a pasta dist/
│   └── deploy.ps1         Build + servidor local
├── docs/                  Documentação complementar
└── dist/                  Gerada pelo build (não versionada)
```

## Fluxo de trabalho com Git

O projeto segue o **GitFlow**:

| Branch | Função |
|---|---|
| `main` | Versões lançadas, sempre estável, com uma tag por versão |
| `develop` | Desenvolvimento contínuo, onde as features são reunidas |
| `feature/*` | Uma branch para cada nova funcionalidade, criada a partir da `develop` |
| `release/*` | Preparação de uma versão, criada a partir da `develop` |
| `hotfix/*` | Correção urgente, criada a partir da `main` |

Os commits seguem o padrão **Conventional Commits**, em português e no imperativo: `feat:`, `fix:`, `perf:`, `build:`, `docs:`, `test:`, `style:` e `chore:`. Detalhes em [docs/gitflow.md](docs/gitflow.md).

## Acessibilidade

O site foi revisado para o nível **AA da WCAG 2.1**:

- HTML semântico, um `h1` por página e hierarquia de títulos sem saltos;
- link "Pular para o conteúdo principal" e foco visível em todos os elementos interativos;
- navegação completa por teclado, inclusive o menu e o submenu (fecha com `Esc`);
- contraste mínimo de 4,5:1 nos textos e de 3:1 nas bordas dos campos;
- formulário com `label`, `aria-describedby`, `aria-invalid` e mensagens de erro em texto;
- troca de página anunciada por leitores de tela e `prefers-reduced-motion` respeitado.
- modo escuro e modo de alto contraste automáticos, que seguem a preferência do sistema (`prefers-color-scheme` e `prefers-contrast`);

Auditoria automática com axe-core: **0 violações** nas três páginas. O passo a passo dos testes está em [docs/acessibilidade.md](docs/acessibilidade.md).

## Desempenho e produção

Resultados do build:

| Arquivo | Original | Produção | Com gzip |
|---|---|---|---|
| CSS (reset + estilos) | 21,9 KB | 16,8 KB | 3,7 KB |
| JavaScript (10 arquivos) | 41,4 KB | 35,9 KB | 11,2 KB |
| Imagem principal | 122,3 KB | 32,3 KB | — |

Outras otimizações: menos requisições (um CSS e um JS), imagem com `loading="lazy"` e dimensões declaradas, e `preconnect` para o CDN do Bootstrap.

## Manutenção

- **Mudar textos, projetos ou perguntas:** edite `js/dados.js`. As páginas são geradas a partir dele.
- **Mudar o visual de um bloco:** ajuste o template em `js/modules/templates.js` e o estilo em `css/styles.css`.
- **Criar uma nova página:** adicione uma função em `js/modules/paginas.js`, registre-a no objeto `Raizes.paginas` e crie o link no menu de `html/index.html`.
- **Mudar uma regra de validação:** edite `js/modules/validacao.js` e cubra o caso em `js/testes/testes.js`.
- **Atualizar o Bootstrap:** troque a versão nas duas URLs do CDN em `html/index.html` e teste as janelas e o aviso.
- **Antes de cada entrega:** rode `html/testes.html`, gere o build e confira as três páginas na versão `dist/`.

## Autoria

Antonio Lucas Ramos Lima — Análise e Desenvolvimento de Sistemas.
