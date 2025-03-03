import * as yup from 'yup';

export const initialFormValuesLogin = {
    login: '',
    password: '',
};

export const initialFormValuesAuth = {
    login: '',
    name: '',
    lastName: '',
    password: '',
};

export const loginValidation = yup.object().shape({
    login: yup
    .string()
    .required('Required field!')
    .min(5, 'Minimum length 5 characters!')
    .max(30, 'Maximum length 30 characters!')
    .matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/, 'Only English letters, numbers, and special characters are allowed!'),
    password: yup
    .string()
    .required('Required field!')
    .min(8, 'Minimum length 8 characters!')
    .max(50, 'Maximum length 50 characters!')
    .matches(/[A-Z]/, 'At least one uppercase letter is required!')
    .matches(/^[a-zA-Z0-9!#$()%^&*-_+=]+$/, 'Only Latin letters, numbers, and special characters are allowed!'),
});


export const registrationValidation = yup.object().shape({
    login: yup
      .string()
      .required('Required field!')
      .min(5, 'Minimum length 5 characters!')
      .max(30, 'Maximum length 30 characters!')
      .matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/, 'Only English letters, numbers, and special characters are allowed!'),
    name: yup
      .string()
      .required('Required field!')
      .max(40, 'Maximum length 40 characters!'),
    lastName: yup
      .string()
      .required('Required field!')
      .max(40, 'Maximum length 40 characters!'),
    password: yup
      .string()
      .required('Required field!')
      .min(8, 'Minimum length 8 characters!')
      .max(50, 'Maximum length 50 characters!')
      .matches(/[A-Z]/, 'At least one uppercase letter is required!')
      .matches(/^[a-zA-Z0-9!#$()%^&*-_+=]+$/, 'Only Latin letters, numbers, and special characters are allowed!'),
  });
