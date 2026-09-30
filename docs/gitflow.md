# Fluxo de trabalho com Git (GitFlow)

## Branches

```
main       ──●───────────────●──────────●──   versões lançadas (com tags)
              \             / \        /
release/*      \           /   ●──────●         preparação da versão
                \         /             \
develop    ──●───●───●───●───────●───────●──   desenvolvimento contínuo
                  \     /         \     /
feature/*          ●───●           ●───●        uma funcionalidade por branch
```

| Branch | Sai de | Volta para | Quando usar |
|---|---|---|---|
| `main` | — | — | Só recebe versões prontas. Cada versão ganha uma tag (`v1.0.0`). |
| `develop` | `main` | — | Reúne tudo o que está em desenvolvimento. |
| `feature/nome` | `develop` | `develop` | Nova funcionalidade ou melhoria. |
| `release/x.y.z` | `develop` | `main` e `develop` | Ajustes finais antes de lançar. |
| `hotfix/nome` | `main` | `main` e `develop` | Correção urgente em uma versão já lançada. |

## Passo a passo

**Nova funcionalidade**

```bash
git checkout develop
git checkout -b feature/nome-da-funcionalidade
# ... commits ...
git checkout develop
git merge --no-ff feature/nome-da-funcionalidade
```

**Lançar uma versão**

```bash
git checkout -b release/1.0.0 develop
# ... só ajustes finais (versão, documentação) ...
git checkout main
git merge --no-ff release/1.0.0
git tag -a v1.0.0 -m "Versão 1.0.0"
git checkout develop
git merge --no-ff release/1.0.0
```

**Correção urgente**

```bash
git checkout -b hotfix/nome-da-correcao main
# ... commit da correção ...
git checkout main
git merge --no-ff hotfix/nome-da-correcao
git tag -a v1.0.1 -m "Versão 1.0.1"
git checkout develop
git merge --no-ff hotfix/nome-da-correcao
```

O `--no-ff` mantém um commit de merge, o que deixa o histórico com a marca de cada funcionalidade.

## Convenção de commits

Formato: `tipo(escopo opcional): descrição curta no imperativo`

| Tipo | Uso |
|---|---|
| `feat` | Nova funcionalidade |
| `fix` | Correção de defeito |
| `perf` | Melhoria de desempenho |
| `build` | Scripts de build e deploy |
| `docs` | Documentação |
| `test` | Testes |
| `style` | Formatação, sem mudar o comportamento |
| `chore` | Tarefas de manutenção |
| `merge` | Integração de uma branch |

Boas práticas: primeira linha com até 72 caracteres, uma linha em branco e um corpo explicando o **porquê** da mudança. Exemplo: `fix(a11y): corrige contraste do texto de destaque`.
