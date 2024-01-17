import * as yup from 'yup';

yup.addMethod(yup.string, 'emailAdvanced', function () {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return this.test('is-email', '${path} must be a valid email', (value) =>
    regex.test(value),
  );
});

// yup.bool(), // .oneOf([true], 'You need to accept newsletter'),

export default yup;
