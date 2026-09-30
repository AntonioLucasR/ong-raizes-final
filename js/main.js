/* Ponto de entrada: liga os módulos quando a página termina de carregar. */
(function (Raizes) {
  'use strict';

  function iniciar() {
    Raizes.roteador.iniciar();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})(window.Raizes);
