/* Páginas da SPA: cada uma monta seu HTML a partir dos dados e dos templates. */
(function (Raizes) {
  'use strict';

  const t = Raizes.templates;
  const d = Raizes.dados;

  const DESCRICAO_IMAGEM = 'Mãos em concha segurando um punhado de terra de onde nasce uma pequena muda verde, com um campo iluminado pelo sol ao fundo, simbolizando o cuidado do Instituto Raízes do Amanhã com a comunidade.';
  const DESCRICAO_IMAGEM_PROJETOS = 'Mãos em concha segurando um punhado de terra de onde nasce uma pequena muda verde, com um campo iluminado pelo sol ao fundo, simbolizando as diferentes frentes de cuidado do Instituto Raízes do Amanhã.';

  function inicio() {
    return `
  <section class="destaque">
    <div class="caixa destaque-caixa">
      <h1>Onde há uma raiz, há um futuro inteiro por crescer.</h1>
      <p class="destaque-texto">
        Há 14 anos plantamos oportunidades em comunidades esquecidas pelo asfalto e
        colhemos histórias de gente que decidiu florescer mesmo em terreno difícil.
      </p>
      <a href="#/inicio/contato" class="botao">Quero apoiar</a>
    </div>
  </section>

  <section id="sobre" class="secao sobre">
    <div class="caixa">
      <h2>Quem somos</h2>
      <div class="sobre-colunas">
        <div class="sobre-texto">
          <p>
            O <strong>Instituto Raízes do Amanhã</strong> nasceu em 2011, numa sala emprestada
            nos fundos de uma biblioteca comunitária, com três voluntários, uma cafeteira
            velha e a teimosia de acreditar que educação e dignidade não deveriam depender
            de CEP. De lá para cá, viramos uma rede de mais de 200 voluntários, quatro
            núcleos comunitários e um jardim de histórias que insistem em dar certo.
          </p>
          <p>
            Trabalhamos com famílias em situação de vulnerabilidade social, oferecendo
            educação complementar, segurança alimentar, capacitação profissional e, acima
            de tudo, escuta. Porque antes de qualquer projeto, existe sempre uma pessoa
            com uma história que merece ser ouvida até o fim.
          </p>
        </div>
        ${t.imagemPrincipal(DESCRICAO_IMAGEM)}
      </div>

      <div class="valores" id="valores">${t.juntar(d.valores, t.cartaoValor)}
      </div>
    </div>
  </section>

  <section id="projetos" class="secao projetos">
    <div class="caixa">
      <h2>Nossos projetos</h2>
      <div class="projetos-colunas">${t.juntar(d.projetos, function (p) { return t.cartaoProjeto(p, 'div'); })}
      </div>

      <p class="projetos-cta">
        <a href="#/projetos" class="botao">Conheça todas as frentes, como doar e como ser voluntário</a>
      </p>
    </div>
  </section>

  <section id="impacto" class="secao impacto">
    <div class="caixa">
      <h2>Impacto em números</h2>
      <div class="numeros-colunas">${t.juntar(d.numeros, t.itemNumero)}
      </div>
    </div>
  </section>

  <section id="depoimentos" class="secao depoimentos">
    <div class="caixa">
      <h2>Vozes que crescem com a gente</h2>
      <div class="depoimentos-colunas">${t.juntar(d.depoimentos, t.depoimento)}
      </div>
    </div>
  </section>

  <section id="contato" class="secao contato">
    <div class="caixa contato-caixa">
      <h2>Faça parte dessa raiz</h2>
      <p>
        Toda transformação começa pequena — uma doação, uma tarde de voluntariado,
        uma partilha nas redes. Fale com a gente e descubra como o seu tempo ou
        recurso pode florescer em histórias reais.
      </p>
      <div class="contato-dados">${t.juntar(d.contato, t.dadoContato)}
      </div>
    </div>
  </section>`;
  }

  function projetos() {
    return `
  <section class="destaque">
    <div class="caixa destaque-caixa">
      <h1>Sua doação e seu tempo transformam essa história.</h1>
      <p class="destaque-texto">
        Aqui você encontra nossas frentes de atuação e todos os caminhos possíveis
        para ajudar: seja doando, seja dedicando algumas horas da sua semana como voluntário.
      </p>
      <a href="#/projetos/doacao" class="botao">Quero doar</a>
    </div>
  </section>

  <section id="frentes" class="secao projetos">
    <div class="caixa">
      <h2>Nossas frentes de atuação</h2>

      <div class="sobre-colunas frentes-intro">
        <div class="sobre-texto">
          <p>
            Cada frente de atuação nasceu de uma necessidade real que a equipe encontrou
            no bairro: crianças fora da escola, famílias sem acesso a uma refeição quente,
            jovens sem qualificação profissional e terrenos abandonados que poderiam virar
            fonte de alimento. Conheça abaixo os quatro projetos que sustentam o trabalho
            do Instituto Raízes do Amanhã.
          </p>
        </div>
        ${t.imagemPrincipal(DESCRICAO_IMAGEM_PROJETOS)}
      </div>

      <div class="projetos-colunas">${t.juntar(d.projetos, function (p) { return t.cartaoProjeto(p, 'article'); })}
      </div>
    </div>
  </section>

  <section id="doacao" class="secao doacao">
    <div class="caixa">
      <h2>Como doar</h2>
      <p class="secao-intro">
        Cada doação é registrada e destinada a uma das nossas frentes de atuação.
        Ao final do ano, publicamos um relatório aberto de prestação de contas.
      </p>

      <div class="doacao-colunas">
        <div class="doacao-metodo">
          <h3>Pix</h3>
          <p>A forma mais rápida de doar, com confirmação imediata.</p>
          <button type="button" class="botao" data-bs-toggle="modal" data-bs-target="#janela-pix">Ver chave Pix</button>
        </div>

        <div class="doacao-metodo">
          <h3>Transferência bancária</h3>
          <table class="doacao-tabela">
            <tbody>${t.juntar(d.conta, t.linhaTabela)}
            </tbody>
          </table>
        </div>

        <div class="doacao-metodo">
          <h3>Doação de itens</h3>
          <p>Recebemos itens em bom estado em nossa sede, de terça a sábado:</p>
          <ul>${t.juntar(d.itensDoacao, function (item) { return `<li>${t.escapar(item)}</li>`; })}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="voluntariado" class="secao voluntariado">
    <div class="caixa">
      <h2>Como ser voluntário</h2>
      <p class="secao-intro">
        Não é preciso ter experiência prévia: cada novo voluntário recebe treinamento
        e acompanhamento da equipe antes de começar.
      </p>

      <ol class="voluntariado-passos">${t.juntar(d.passosVoluntario, function (passo) {
        return `
        <li><strong>${t.escapar(passo[0])}</strong> ${t.escapar(passo[1])}</li>`;
      })}
      </ol>

      <h3>Áreas que precisam de voluntários agora</h3>
      <ul class="voluntariado-areas">${t.juntar(d.areasVoluntario, function (area) { return `<li>${t.escapar(area)}</li>`; })}
      </ul>

      <p class="projetos-cta">
        <a href="#/cadastro" class="botao">Quero me cadastrar como voluntário</a>
      </p>
    </div>
  </section>

  <section id="perguntas" class="secao perguntas">
    <div class="caixa">
      <h2>Perguntas frequentes</h2>${t.juntar(d.perguntas, t.pergunta)}
    </div>
  </section>`;
  }

  function cadastro() {
    const aviso = t.alerta(
      'informacao',
      'ℹ️',
      'Seus dados são usados apenas para contato sobre voluntariado e doações — nunca compartilhamos suas informações com terceiros. Veja nossos <button type="button" class="link-botao" data-bs-toggle="modal" data-bs-target="#janela-termos">termos de uso</button>.'
    );

    return `
  <section class="secao cadastro">
    <div class="caixa cadastro-caixa">
      <h1>Cadastre-se como voluntário ou apoiador</h1>
      <p class="secao-intro">
        Preencha o formulário abaixo com seus dados. Nossa equipe entrará em contato
        para combinar os próximos passos.
      </p>
      ${aviso}

      <div id="rascunho-aviso" class="rascunho-aviso"></div>
      <div id="resumo-erros" tabindex="-1"></div>

      <form class="formulario" id="form-cadastro" action="#/cadastro" method="post" novalidate>

        <fieldset>
          <legend>Dados pessoais</legend>
          ${t.campoEntrada({ id: 'nome', rotulo: 'Nome completo', autocomplete: 'name', placeholder: 'Digite seu nome completo', pattern: '[A-Za-zÀ-ÿ\\s]{3,100}', title: 'Digite apenas letras e espaços, com no mínimo 3 caracteres.' })}
          ${t.campoEntrada({ id: 'email', rotulo: 'E-mail', tipo: 'email', autocomplete: 'email', placeholder: 'voce@exemplo.com' })}
          ${t.campoEntrada({ id: 'nascimento', rotulo: 'Data de nascimento', tipo: 'date', autocomplete: 'bday', max: '2016-01-01' })}
          ${t.campoEntrada({ id: 'cpf', rotulo: 'CPF', inputmode: 'numeric', autocomplete: 'off', placeholder: '000.000.000-00', pattern: '\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}', title: 'Digite o CPF no formato 000.000.000-00.', maxlength: 14 })}
          ${t.campoEntrada({ id: 'telefone', rotulo: 'Telefone', tipo: 'tel', autocomplete: 'tel', placeholder: '(00) 00000-0000', pattern: '\\(\\d{2}\\)\\s\\d{4,5}-\\d{4}', title: 'Digite o telefone no formato (00) 00000-0000.' })}
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>
          ${t.campoEntrada({ id: 'cep', rotulo: 'CEP', inputmode: 'numeric', autocomplete: 'postal-code', placeholder: '00000-000', pattern: '\\d{5}-\\d{3}', title: 'Digite o CEP no formato 00000-000.', maxlength: 9 })}
          ${t.campoEntrada({ id: 'endereco', rotulo: 'Endereço', autocomplete: 'address-line1', placeholder: 'Rua, número e complemento' })}
          ${t.campoEntrada({ id: 'cidade', rotulo: 'Cidade', autocomplete: 'address-level2', placeholder: 'Sua cidade' })}
          ${t.campoSelecao({ id: 'estado', rotulo: 'Estado', autocomplete: 'address-level1', opcoes: d.estados })}
        </fieldset>

        <fieldset>
          <legend>Como você quer ajudar</legend>
          ${t.campoSelecao({ id: 'interesse', rotulo: 'Área de interesse', opcoes: d.interesses })}
          ${t.campoTextoLongo({ id: 'mensagem', rotulo: 'Mensagem (opcional)', maxlength: 500, placeholder: 'Conte um pouco sobre você ou sua disponibilidade de horário' })}
        </fieldset>

        <div class="formulario-acoes">
          <button type="submit" class="botao">Enviar cadastro</button>
        </div>
      </form>

      <div id="cadastros-salvos"></div>
    </div>
  </section>`;
  }

  function naoEncontrada() {
    return `
  <section class="secao">
    <div class="caixa contato-caixa">
      <h1>Página não encontrada</h1>
      <p class="secao-intro">O endereço que você tentou abrir não existe neste site.</p>
      <p class="projetos-cta"><a href="#/inicio" class="botao">Voltar para o início</a></p>
    </div>
  </section>`;
  }

  Raizes.paginas = {
    inicio: { titulo: 'Instituto Raízes do Amanhã', nome: 'Início', renderizar: inicio },
    projetos: { titulo: 'Projetos, doação e voluntariado — Instituto Raízes do Amanhã', nome: 'Projetos, doação e voluntariado', renderizar: projetos },
    cadastro: { titulo: 'Cadastro de voluntário — Instituto Raízes do Amanhã', nome: 'Cadastro', renderizar: cadastro },
    naoEncontrada: { titulo: 'Página não encontrada — Instituto Raízes do Amanhã', nome: 'Página não encontrada', renderizar: naoEncontrada }
  };
})(window.Raizes = window.Raizes || {});
