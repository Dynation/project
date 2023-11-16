import * as yup from 'yup';

export const USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .min(2, 'too short')
    .max(64, 'to long')
    .matches(/^[A-Z][a-z]*$/, 'johannyj babaii')
    .required(),
  lastName: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z][a-z]*$/, 'johannyj babaii')
    .required(),
  phoneNumber: yup
    .string()
    .length(13)
    .matches(/^\+\d{12}$/, 'what is it?')
    .required(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*?[_])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      'use a _ whith any password tiks'
    ),
  confirmPassword: yup
    .string()
    .required()
    .matches('password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  email: yup
    .string()
    .email()
    .required(),
  confirmEmail: yup
    .string()
    .required()
    .email()
    .oneOf([yup.ref('email')], 'email not match'),

  birthday: yup.date().max(new Date()),
});
