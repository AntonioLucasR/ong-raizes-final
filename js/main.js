/* Ponto de entrada: liga os módulos quando a página termina de carregar. */
(function (Raizes) {
  'use strict';

  function ligarLinkPular() {
    const link = document.querySelector('.link-pular');
    if (!link) return;
    link.addEventListener('click', function (evento) {
      evento.preventDefault();
      const principal = document.getElementById('aplicacao');
      principal.focus();
      principal.scrollIntoView();
    });
  }

  function iniciar() {
    Raizes.roteador.iniciar();
    ligarLinkPular();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})(window.Raizes);
