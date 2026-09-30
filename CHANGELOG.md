# Histórico de mudanças

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

## [1.2.1] - 2026-09-30

### Corrigido
- README: comando de instalação com o endereço real do repositório e pasta `.github/` na estrutura de pastas.

## [1.2.0] - 2026-09-30

### Adicionado
- Publicação no GitHub Pages, com link público: https://antoniolucasr.github.io/ong-raizes-final/
- Workflow do GitHub Actions que roda o build em pull requests e publica o site a cada push na `main`.
- Modelo de pull request e documentação do fluxo com issues, milestones e PRs.

## [1.1.1] - 2026-09-30

### Corrigido
- Tamanhos do CSS na tabela de desempenho do README, atualizados após os modos de cor.

## [1.1.0] - 2026-09-30

### Adicionado
- Modo escuro automático, que segue a preferência do sistema (`prefers-color-scheme`).
- Modo de alto contraste no tema claro e no escuro (`prefers-contrast`).
- Seção sobre os modos de cor na documentação de acessibilidade.

## [1.0.1] - 2026-09-30

### Corrigido
- Rolagem horizontal no bloco "Sobre" em telas de celular (WCAG 1.4.10, Reflow).

## [1.0.0] - 2026-09-30

### Adicionado
- Site em SPA com três páginas (início, projetos e cadastro) gerado por templates em JavaScript.
- Formulário de cadastro com máscaras, validação de CPF e mensagens de erro, com rascunho e cadastros guardados no `localStorage`.
- Janelas e avisos com Bootstrap 5.
- Link para pular ao conteúdo, foco visível e submenu que fecha com `Esc`.
- Scripts de build e de deploy local (`scripts/build.ps1` e `scripts/deploy.ps1`).
- README, guia de GitFlow e registro de acessibilidade.

### Corrigido
- Contraste do texto de destaque e dos placeholders (WCAG 1.4.3).
- Contraste das bordas dos campos (WCAG 1.4.11).

### Desempenho
- CSS e JavaScript unidos e minificados, com gzip no deploy.
- Imagem principal 74% menor (122 KB para 32 KB).
