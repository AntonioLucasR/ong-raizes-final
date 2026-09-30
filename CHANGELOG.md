# Histórico de mudanças

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

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
