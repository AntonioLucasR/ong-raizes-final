# Acessibilidade (WCAG 2.1, nível AA)

## Como testar

1. **Automático.** Abra o site, carregue o [axe-core](https://github.com/dequelabs/axe-core) no console e rode `axe.run()` em cada página (`#/inicio`, `#/projetos` e `#/cadastro`). Resultado atual: 0 violações.
2. **Teclado.** Use só `Tab`, `Shift+Tab`, `Enter` e `Esc`. Confira se todos os elementos recebem foco visível e se nada prende o foco.
3. **Leitor de tela.** Teste com o NVDA (gratuito, Windows). A troca de página deve ser anunciada ("Você está em: ...").
4. **Contraste.** Confira as cores no [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/): 4,5:1 para texto normal e 3:1 para texto grande e componentes.
5. **Zoom.** Aumente a página até 200% e confira que não aparece rolagem horizontal.

## Problemas encontrados e corrigidos

| Critério | Problema | Correção |
|---|---|---|
| 1.4.3 Contraste mínimo | Texto do destaque com 4,31:1 no fim do degradê | Cor do texto clareada (4,89:1) |
| 1.4.3 Contraste mínimo | Placeholder padrão do navegador com 4,2:1 | Cor definida com 5,2:1 |
| 1.4.11 Contraste não textual | Borda dos campos muito clara (cerca de 1,5:1) | Borda escurecida (3,7:1 ou mais) |
| 2.4.1 Ignorar blocos | Sem forma de pular o menu | Link "Pular para o conteúdo principal" |
| 2.4.7 Foco visível | Links e resumos sem contorno de foco claro | Contorno de 3 px em todos os elementos interativos |
| 1.4.13 Conteúdo em foco | Submenu não podia ser dispensado | `Esc` fecha o submenu |
| 1.4.10 Reflow | Bloco "Sobre" com 456 px de largura em telas de 375 px, gerando rolagem horizontal | Coluna única abaixo de 768 px (hotfix da versão 1.0.1) |

## Requisitos já atendidos na base

- Idioma da página (`lang="pt-BR"`) e título que muda a cada página.
- Um `h1` por página e hierarquia `h1`, `h2`, `h3` sem saltos.
- Marcos (`header`, `nav`, `main`, `footer`) e `aria-current="page"` no link ativo.
- Imagens com texto alternativo descritivo e ícones decorativos com `aria-hidden`.
- Formulário com `label`, `autocomplete`, `aria-describedby`, `aria-invalid` e erros em texto.
- Janelas do Bootstrap com `role="dialog"` e rótulo.
- Movimento reduzido: rolagem suave e transições desligadas com `prefers-reduced-motion`.

## Modos de cor (escuro e alto contraste)

Os dois modos seguem a preferência do sistema operacional, sem JavaScript e sem botão, por meio de media queries no `css/styles.css`:

| Modo | Media query | Como funciona |
|---|---|---|
| Escuro | `prefers-color-scheme: dark` | Paleta escura (fundo `#101713`, cartões `#1a241f`, texto `#e8efe9`) aplicada por seletor. Foco em verde-claro. |
| Alto contraste (claro) | `prefers-contrast: more` | Texto preto (19:1), bordas de 2 px, links sublinhados e foco de 4 px. |
| Alto contraste (escuro) | `prefers-contrast: more` + escuro | Texto e bordas brancos (18:1). |

Como as variáveis de cor misturam papéis (o branco é fundo de cartão e também texto sobre o degradê), as cores são trocadas por seletor e não pelas variáveis.

### Como testar

- **Escuro:** ative o tema escuro do sistema, ou use o DevTools em *Rendering* e *Emulate CSS prefers-color-scheme*.
- **Alto contraste:** use o DevTools em *Rendering* e *Emulate CSS prefers-contrast: more*.
- Rode o axe-core em cada página nos dois modos.
