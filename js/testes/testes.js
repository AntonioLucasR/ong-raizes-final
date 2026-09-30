/* Testes simples das funções puras: abra html/testes.html no navegador para ver o resultado. */
(function (Raizes) {
  'use strict';

  const v = Raizes.validacao;
  const m = Raizes.mascaras;
  const t = Raizes.templates;
  const a = Raizes.armazenamento;
  const resultados = [];

  function testar(nome, condicao) {
    resultados.push({ nome: nome, passou: !!condicao });
  }

  function igual(nome, obtido, esperado) {
    const passou = obtido === esperado;
    resultados.push({ nome: nome + (passou ? '' : ' (esperado "' + esperado + '", obtido "' + obtido + '")'), passou: passou });
  }

  // Máscaras
  igual('Máscara de CPF completa', m.cpf('52998224725'), '529.982.247-25');
  igual('Máscara de CPF parcial', m.cpf('5299822'), '529.982.2');
  igual('Máscara de CPF ignora letras e excesso', m.cpf('abc529982247259999'), '529.982.247-25');
  igual('Máscara de telefone celular', m.telefone('11987654321'), '(11) 98765-4321');
  igual('Máscara de telefone fixo', m.telefone('1140028922'), '(11) 4002-8922');
  igual('Máscara de CEP', m.cep('01310100'), '01310-100');

  // Validação
  testar('CPF válido é aceito', v.validarCPF('529.982.247-25'));
  testar('CPF com dígito errado é recusado', !v.validarCPF('529.982.247-24'));
  testar('CPF com números repetidos é recusado', !v.validarCPF('111.111.111-11'));
  testar('CPF incompleto é recusado', !v.validarCPF('529.982'));
  testar('Telefone no formato correto', v.validarTelefone('(11) 98765-4321'));
  testar('Telefone sem parênteses é recusado', !v.validarTelefone('11 98765-4321'));
  testar('CEP no formato correto', v.validarCEP('01310-100'));
  testar('CEP sem hífen é recusado', !v.validarCEP('01310100'));
  testar('E-mail válido', v.validarEmail('voce@exemplo.com'));
  testar('E-mail sem domínio é recusado', !v.validarEmail('voce@exemplo'));
  testar('Nome com números é recusado', !v.validarNome('Ana 123'));
  testar('Nome com acento é aceito', v.validarNome('José da Conceição'));
  igual('Nascimento dentro do limite', v.validarNascimento('2000-05-10', '2016-01-01'), 'ok');
  igual('Nascimento depois do limite', v.validarNascimento('2020-05-10', '2016-01-01'), 'muito-recente');
  igual('Nascimento com data inexistente', v.validarNascimento('2000-02-31', '2016-01-01'), 'invalida');

  // Templates
  testar('Template escapa HTML perigoso', t.escapar('<img src=x onerror=alert(1)>').indexOf('<') === -1);
  testar('Cartão de projeto contém o título', t.cartaoProjeto({ categoria: 'X', titulo: 'Título Teste', texto: 'y' }).indexOf('Título Teste') !== -1);

  // Armazenamento
  a.salvar('teste-unitario', { ok: true });
  testar('Armazenamento guarda e lê um objeto', a.ler('teste-unitario', null).ok === true);
  a.remover('teste-unitario');
  igual('Armazenamento devolve o padrão após remover', a.ler('teste-unitario', 'vazio'), 'vazio');

  const lista = document.getElementById('lista-testes');
  const falhas = resultados.filter(function (r) { return !r.passou; }).length;

  resultados.forEach(function (r) {
    const item = document.createElement('li');
    item.textContent = (r.passou ? '✔ ' : '✘ ') + r.nome;
    item.style.color = r.passou ? '#1f4d3a' : '#a52a1f';
    lista.appendChild(item);
  });

  document.getElementById('resumo-testes').textContent =
    resultados.length + ' testes: ' + (resultados.length - falhas) + ' passaram, ' + falhas + ' falharam.';
})(window.Raizes);
