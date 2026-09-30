/* Dados do site: o conteúdo fica separado da marcação para ser reaproveitado pelos templates. */
(function (Raizes) {
  'use strict';

  Raizes.dados = {
    projetos: [
      {
        categoria: 'Educação',
        titulo: 'Sementinha Letrada',
        texto: 'Reforço escolar e contação de histórias para crianças de 6 a 12 anos, três tardes por semana. Já são 480 crianças alfabetizadas com carinho e paciência, uma sílaba de cada vez.'
      },
      {
        categoria: 'Alimentação',
        titulo: 'Panela Comum',
        texto: 'Cozinha comunitária que transforma doações de hortifrútis em refeições quentes. Distribuímos mais de 3 mil marmitas por mês e nenhuma pergunta é feita antes do prato ser servido.'
      },
      {
        categoria: 'Trabalho',
        titulo: 'Mãos que Constroem',
        texto: 'Cursos gratuitos de costura, marcenaria e informática básica para jovens e adultos. Sete em cada dez formandos conseguem sua primeira renda formal em até seis meses.'
      },
      {
        categoria: 'Meio ambiente',
        titulo: 'Horta Raiz Viva',
        texto: 'Hortas comunitárias em terrenos baldios, cuidadas por moradores do bairro. Já são 12 hortas ativas, produzindo alimento, renda extra e um pouco mais de verde no cimento.'
      }
    ],

    valores: [
      { icone: '🤝', titulo: 'Acolhimento', texto: 'Toda porta aqui se abre para dentro. Chegar já é o primeiro passo de qualquer mudança.' },
      { icone: '🌾', titulo: 'Autonomia', texto: 'Não plantamos dependência, plantamos ferramentas para que cada pessoa colha o próprio caminho.' },
      { icone: '🔎', titulo: 'Transparência', texto: 'Cada real doado tem nome, destino e prestação de contas. Confiança se constrói com clareza.' }
    ],

    numeros: [
      { valor: '2.340', legenda: 'pessoas atendidas em 2025' },
      { valor: '480', legenda: 'crianças no reforço escolar' },
      { valor: '3.000+', legenda: 'refeições servidas por mês' },
      { valor: '200', legenda: 'voluntários ativos' }
    ],

    depoimentos: [
      { texto: 'Eu não sabia ler direito até os 9 anos. Hoje ajudo minha mãe a preencher formulário e já li três livros inteirinhos.', autor: 'Kauã, 11 anos, aluno do Sementinha Letrada' },
      { texto: 'O curso de marcenaria me deu ofício, e o ofício me devolveu o orgulho de levar o sustento pra casa.', autor: 'Marli, 47 anos, ex-aluna do Mãos que Constroem' },
      { texto: 'Aqui ninguém pergunta de onde eu vim antes de me oferecer um prato quente. Isso muda a forma como a gente enxerga o dia seguinte.', autor: 'José, morador atendido pela Panela Comum' }
    ],

    contato: [
      { rotulo: 'E-mail', valor: 'contato@raizesdoamanha.org.br' },
      { rotulo: 'Telefone', valor: '(11) 4002-8922' },
      { rotulo: 'Endereço', valor: 'Rua das Acácias, 215 — Bairro Esperança, São Paulo/SP' }
    ],

    conta: [
      { rotulo: 'Banco', valor: 'Banco Comunidade S.A.' },
      { rotulo: 'Agência', valor: '0001' },
      { rotulo: 'Conta corrente', valor: '00000-0' },
      { rotulo: 'Titular', valor: 'Instituto Raízes do Amanhã' }
    ],

    itensDoacao: [
      'Alimentos não perecíveis',
      'Roupas, calçados e cobertores',
      'Material escolar e livros infantis',
      'Ferramentas para os cursos profissionalizantes'
    ],

    passosVoluntario: [
      ['Preencha o formulário de interesse', 'com seus dados e disponibilidade de horário.'],
      ['Participe de uma conversa', 'com a equipe de voluntariado, presencial ou por vídeo.'],
      ['Escolha uma frente de atuação', 'de acordo com seu perfil e interesse.'],
      ['Comece sua jornada', 'acompanhado por um voluntário mais experiente nas primeiras semanas.']
    ],

    areasVoluntario: [
      'Reforço escolar — projeto Sementinha Letrada',
      'Preparo e distribuição de refeições — projeto Panela Comum',
      'Instrutores de costura, marcenaria e informática — projeto Mãos que Constroem',
      'Cuidado das hortas comunitárias — projeto Horta Raiz Viva'
    ],

    perguntas: [
      { pergunta: 'Posso destinar minha doação a um projeto específico?', resposta: 'Sim. Basta informar o nome do projeto na mensagem da transferência ou avisar pelo e-mail de contato após doar pelo Pix.' },
      { pergunta: 'Existe idade mínima para ser voluntário?', resposta: 'Sim, a partir de 16 anos, com autorização de um responsável para menores de 18 anos.' },
      { pergunta: 'Preciso me comprometer com um horário fixo semanal?', resposta: 'Não. Você define, junto com a equipe, a frequência que cabe na sua rotina — desde uma tarde por mês até várias vezes por semana.' },
      { pergunta: 'Como acompanho o uso das doações recebidas?', resposta: 'Publicamos anualmente um relatório de transparência com a origem e o destino de cada recurso arrecadado, disponível mediante solicitação por e-mail.' }
    ],

    estados: [
      ['AC', 'Acre'], ['AL', 'Alagoas'], ['AP', 'Amapá'], ['AM', 'Amazonas'], ['BA', 'Bahia'],
      ['CE', 'Ceará'], ['DF', 'Distrito Federal'], ['ES', 'Espírito Santo'], ['GO', 'Goiás'],
      ['MA', 'Maranhão'], ['MT', 'Mato Grosso'], ['MS', 'Mato Grosso do Sul'], ['MG', 'Minas Gerais'],
      ['PA', 'Pará'], ['PB', 'Paraíba'], ['PR', 'Paraná'], ['PE', 'Pernambuco'], ['PI', 'Piauí'],
      ['RJ', 'Rio de Janeiro'], ['RN', 'Rio Grande do Norte'], ['RS', 'Rio Grande do Sul'],
      ['RO', 'Rondônia'], ['RR', 'Roraima'], ['SC', 'Santa Catarina'], ['SP', 'São Paulo'],
      ['SE', 'Sergipe'], ['TO', 'Tocantins']
    ],

    interesses: [
      ['educacao', 'Educação — Sementinha Letrada'],
      ['alimentacao', 'Alimentação — Panela Comum'],
      ['trabalho', 'Trabalho — Mãos que Constroem'],
      ['meio-ambiente', 'Meio ambiente — Horta Raiz Viva']
    ]
  };
})(window.Raizes = window.Raizes || {});
