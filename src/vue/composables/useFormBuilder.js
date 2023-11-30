import { ref } from 'vue'
import useFormHandler from './useFormHandler'
import { useElementVisibility } from '@vueuse/core'

const useFormBuilder = (props) => {
  const formSubmited = ref(false)
  const formMessage = ref(null);

  const supplies = props.supplies;
  const testMode = supplies.form.testmode;
  const fieldSegmentID = supplies.id;

  const form = ref(null);
  const formId = supplies.form.id

  const { submitHandler } = useFormHandler({
    action: supplies.form.action,
    url: supplies.form.url,
    ref: form,
    id: formId,
    formSubmited: formSubmited,
    formMessage: formMessage,
  });

  // PageSpeed Insights
  const formVisible = useElementVisibility(form)

  return {
    formSubmited,
    formMessage,
    formVisible,
    testMode,
    fieldSegmentID,
    form,
    formId,
    submitHandler,
  }
}

export default useFormBuilder
