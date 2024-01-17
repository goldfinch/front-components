import { ref, watch, nextTick } from 'vue';
import { useElementVisibility } from '@vueuse/core';
import { load } from 'recaptcha-v3';
import axios from 'axios';
import { reset } from '@formkit/core';
import useFormData from './useFormData';
// import LenisPlugin from '../../plugins/lenis/lenis';

export default function useFormHandler(cfg) {
  const isVisible = useElementVisibility(cfg.ref);

  const recaptchaLoaded = ref(false);
  const recaptcha = ref(null);

  async function submitHandler(data, node) {
    // if recaptcha hasn't been loaded yet (unlikely but still)
    if (!recaptcha.value) {
      alert('Sorry, this request hasn\'t been sent. It could be due to a weak internet connection. Please, refresh the page a try again.');
    }

    showBadge();

    const token = await recaptcha.value.execute(cfg.action);

    data.token = token;

    const csrfToken = document.head.querySelector('meta[name="csrf-token"]');

    return await axios({
      method: 'post',
      url: cfg.url,
      headers: { 'X-CSRF-TOKEN': csrfToken.content },
      data: useFormData(data),
    })
      .then(async (response) => {
        if (response.status == 200 && response.data.status == true) {
          hideBadge();

          reset(cfg.id);

          cfg.formSubmited.value = true;

          if (cfg.supplies.thankyou_page) {
            window.location = `/thank-you/${cfg.supplies.form.action}`;
          } else {
            cfg.formMessage.value = response.data.message;
          }

          await nextTick();

          // LenisPlugin.scrollTo('#contactFormMessage');
        } else {

        //
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.data instanceof Object) {
            for (const [key, value] of Object.entries(error.response.data)) {
              node.setErrors(
              // ['There was an error in this form'],
                {
                  [key]: value,
                },
              );
            }
          } else {
            node.setErrors(
              [error.response.data],
            );
          }
        }
      });
  }

  async function recaptchaInit() {
    const siteKey = document.head.querySelector('meta[name="g-site-key"]');

    if (siteKey) {
      recaptcha.value = await load(siteKey.content);
    }
  }

  watch(isVisible, (current, prev) => {
    if (!recaptchaLoaded.value && current) {
      recaptchaLoaded.value = true;
      recaptchaInit();
    }
  });

  const showBadge = () => {
    const badge = document.getElementsByClassName('grecaptcha-badge');
    if (badge.length) {
      badge[0].classList.add('grecaptcha-badge--show');
    }
  };

  const hideBadge = () => {
    const badge = document.getElementsByClassName('grecaptcha-badge');
    if (badge.length) {
      badge[0].classList.remove('grecaptcha-badge--show');
    }
  };

  return { submitHandler };
}
