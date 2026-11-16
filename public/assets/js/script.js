(function () {
  'use strict';

  // ----- Menu burger (mobile) -----
  var toggle = document.getElementById('menu-toggle');
  var nav = document.querySelector('.nav');

  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('open', open);
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    };

    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('open'));
    });

    // Referme le menu après un clic sur un lien
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setOpen(false);
      });
    });

    // Échap referme le menu
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    });

    // Repasse en affichage desktop : on réinitialise l'état
    window.matchMedia('(min-width: 901px)').addEventListener('change', function (event) {
      if (event.matches) {
        setOpen(false);
      }
    });
  }

  // ----- Ombre sous l'en-tête au défilement -----
  var header = document.querySelector('.site-header');

  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ----- Année du copyright -----
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
