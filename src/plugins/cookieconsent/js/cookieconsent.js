import { CookieConsent } from '@sandstreamdev/cookieconsent';
import '@sandstreamdev/cookieconsent/build/cookieconsent.min.css';

class CookieConsentHandler {
  constructor() {
    this.init();
  }

  init() {
    new CookieConsent({
      palette: {
        popup: {
          background: '#222',
          text: '#fff',
        },
        button: {
          background: '#fff',
        },
      },
      type: 'opt-in',
      // consentSettingsElementId: 'cc-revoke-choice',
      // layout: 'categories',
      // showCategories: {
      //   [CookieConsent.UNCATEGORIZED]: true,
      //   [CookieConsent.ESSENTIAL]: true,
      //   [CookieConsent.PERSONALIZATION]: true,
      //   [CookieConsent.ANALYTICS]: true,
      //   [CookieConsent.MARKETING]: false
      // },
      // content: {
      //   privacyPolicyLink: '/privacy-policy',
      //   cookiePolicyLink: '/cookie-policy'
      // },
      cookie: {
        domain: window.location.host,
        name: 'GBG',
      },
      content: {
        message:
          'We would like to measure how you browse our website to constantly improve it, based on your usage patterns. To accomplish this, we must store cookies on your device.',
      },
      elements: {
        customize: '',
      },
    });

    // cc.on('initialized', function () {
    //   const { consents } = cc;

    //   if (consents[CC.ANALYTICS] === CC.ALLOW) {
    //     initializeGTM();
    //   }
    // });

    // cc.on('popupClosed', function () {
    //   const { consents } = cc;

    //   if (consents[CC.ANALYTICS] === CC.ALLOW) {
    //     initializeGTM();
    //   } else if (isGTMInitialized()) {
    //     uninitializeGTM();
    //   }
    // });

    // function isGTMInitialized() {
    //   return window.gtmInitialized;
    // }

    // function initializeGTM() {
    //   if (!isGTMInitialized()) {
    //     // window.dataLayer = window.dataLayer || [];
    //     // window.dataLayer.push({
    //     //   'gtm.start': new Date().getTime(),
    //     //   event: 'gtm.js'
    //     // });
    //     // var f = document.getElementsByTagName('script')[0];
    //     // var j = document.createElement('script');
    //     // j.async = true;
    //     // j.src =
    //     //   'https://www.googletagmanager.com/gtm.js?id=[ YOUR_GTM_CONTAINER_ID ]';
    //     // f.parentNode.insertBefore(j, f);
    //     window.gtmInitialized = true;
    //   }
    // }

    // function uninitializeGTM() {
    //   // remove cookies
    //   cc.deleteCookie('_ga');
    //   cc.deleteCookie('_gid');
    //   // cc.deleteCookie('_gat_YOUR_GOOGLE_ANALYTICS_TRACKING_ID');

    //   // reload page to get rid of GTM
    //   location.reload();
    // }
  }
}

export default CookieConsentHandler;
