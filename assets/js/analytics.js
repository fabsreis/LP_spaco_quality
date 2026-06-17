/**
 * Tracking de cliques WhatsApp via Google Tag Manager (dataLayer)
 * Configure o evento "whatsapp_click" no GTM para disparar conversões.
 */
(function () {
  'use strict';

  window.dataLayer = window.dataLayer || [];

  function trackWhatsAppClick(position, topic) {
    window.dataLayer.push({
      event: 'whatsapp_click',
      click_position: position,
      click_url: 'https://wa.me/5511983811360',
      page_topic: topic,
      campaign_source: 'google_ads'
    });
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-gtm-whatsapp]');
    if (!link) return;
    trackWhatsAppClick(
      link.getAttribute('data-gtm-whatsapp'),
      link.getAttribute('data-page-topic') || 'landing_page'
    );
  });
})();
