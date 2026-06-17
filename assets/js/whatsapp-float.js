/**
 * Botão flutuante de WhatsApp — aparece após 5 segundos
 */
(function () {
  'use strict';

  var DELAY_MS = 5000;
  var ICON_PATH = '/assets/images/WhatsApp_Logo_green.svg.png';
  var DEFAULT_URL = 'https://wa.me/5511983811360';

  function getWhatsAppConfig() {
    var existingLink = document.querySelector('[data-gtm-whatsapp]');
    if (!existingLink) {
      return { url: DEFAULT_URL, topic: 'landing_page' };
    }
    return {
      url: existingLink.getAttribute('href') || DEFAULT_URL,
      topic: existingLink.getAttribute('data-page-topic') || 'landing_page'
    };
  }

  function createButton(config) {
    var link = document.createElement('a');
    link.href = config.url;
    link.target = '_blank';
    link.rel = 'noopener';
    link.className = 'whatsapp-float';
    link.setAttribute('aria-label', 'Falar com atendimento pelo WhatsApp');
    link.setAttribute('data-gtm-whatsapp', 'floating_button');
    link.setAttribute('data-page-topic', config.topic);

    link.innerHTML =
      '<span class="whatsapp-float__cta">Falar com atendimento</span>' +
      '<span class="whatsapp-float__icon">' +
        '<img src="' + ICON_PATH + '" alt="" width="56" height="56" loading="lazy">' +
      '</span>';

    document.body.appendChild(link);

    setTimeout(function () {
      link.classList.add('is-visible');
    }, DELAY_MS);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      createButton(getWhatsAppConfig());
    });
  } else {
    createButton(getWhatsAppConfig());
  }
})();
