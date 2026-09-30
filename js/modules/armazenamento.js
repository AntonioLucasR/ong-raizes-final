/* Armazenamento no navegador (localStorage) com plano B em memória se o navegador bloquear. */
(function (Raizes) {
  'use strict';

  const PREFIXO = 'raizes:';
  const CHAVE_CADASTROS = 'cadastros';
  const CHAVE_RASCUNHO = 'rascunho';
  const memoria = {};

  function localStorageDisponivel() {
    try {
      const teste = PREFIXO + 'teste';
      window.localStorage.setItem(teste, '1');
      window.localStorage.removeItem(teste);
      return true;
    } catch (erro) {
      return false;
    }
  }

  const usaLocalStorage = localStorageDisponivel();

  function ler(chave, padrao) {
    try {
      const bruto = usaLocalStorage ? window.localStorage.getItem(PREFIXO + chave) : memoria[chave];
      return bruto ? JSON.parse(bruto) : padrao;
    } catch (erro) {
      return padrao;
    }
  }

  function salvar(chave, valor) {
    const texto = JSON.stringify(valor);
    if (usaLocalStorage) {
      window.localStorage.setItem(PREFIXO + chave, texto);
    } else {
      memoria[chave] = texto;
    }
  }

  function remover(chave) {
    if (usaLocalStorage) {
      window.localStorage.removeItem(PREFIXO + chave);
    } else {
      delete memoria[chave];
    }
  }

  function listarCadastros() {
    const lista = ler(CHAVE_CADASTROS, []);
    return Array.isArray(lista) ? lista : [];
  }

  function adicionarCadastro(cadastro) {
    const lista = listarCadastros();
    lista.push(Object.assign({ criadoEm: new Date().toISOString() }, cadastro));
    salvar(CHAVE_CADASTROS, lista);
    return lista.length;
  }

  function limparCadastros() {
    remover(CHAVE_CADASTROS);
  }

  function lerRascunho() {
    return ler(CHAVE_RASCUNHO, null);
  }

  function salvarRascunho(dados) {
    salvar(CHAVE_RASCUNHO, dados);
  }

  function limparRascunho() {
    remover(CHAVE_RASCUNHO);
  }

  Raizes.armazenamento = {
    ler: ler,
    salvar: salvar,
    remover: remover,
    listarCadastros: listarCadastros,
    adicionarCadastro: adicionarCadastro,
    limparCadastros: limparCadastros,
    lerRascunho: lerRascunho,
    salvarRascunho: salvarRascunho,
    limparRascunho: limparRascunho
  };
})(window.Raizes = window.Raizes || {});
