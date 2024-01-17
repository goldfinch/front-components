import { generateClasses } from '@formkit/themes';
import { createAutoAnimatePlugin } from '@formkit/addons';
import { createInput } from '@formkit/vue';

import DropdownField from '@/extra/js/vue/components/form/DropdownField.vue';

/**
 * @formkit/themes/dist/tailwindcss/genesis/index.mjs
 */
const config = {
  plugins: [
    createAutoAnimatePlugin(
      {
        /* optional AutoAnimate config */
        // default:
        duration: 250,
        easing: 'ease-in-out',
        delay: 0,
      },
      {
        /* optional animation targets object */
        // default:
        global: ['outer', 'inner'],
        form: ['form'],
        repeater: ['items'],
      },
    ),
  ],
  inputs: {
    dropdown: createInput(DropdownField, {
      // props: [],
    }),
  },
  config: {
    classes: generateClasses({
      global: { // classes
        outer: '',
        input: '$reset form-control',
        label: 'form-label-lg mt-3',
        help: '$reset form-text',
      },
      form: {
        form: '$reset',
      },
      range: {
        input: '$reset form-range',
      },
      submit: {
        outer: '$reset mt-4',
        input: '$reset btn btn-outline-primary text-uppercase',
      },
    }),
  },
};

export default config;
