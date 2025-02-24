import React from 'react';
import styles from './blockSignUpForm.module.scss';
import { Formik, Form } from 'formik'; 
import { useNavigate } from 'react-router-dom';
import {CommonInputForm} from '../../../../components/Common/CommonInputForm/CommonInputForm';
import {CommonButton} from '../../../../components/Common/CommonButton/CommonButton';
import { registrationValidation } from '../../../../helpers/authValidation/authValidation';
import { ROUTES } from '../../../../routes/routes';

export const BlockSignUpForm = function () {

  const navigate = useNavigate();

  const initialFormValues = {
      login: '',
      name: '',
      lastName: '',
      password: '',
  };

  const onFormSubmit = (formValues: any) => {
      console.log('Форма отправлена:', formValues);
      navigate('/'); 
  };

  const handleSingInClick = () => {
    navigate(ROUTES.signin);
  };

  return (
     <div className={styles.blockSignUpForm}>
      <Formik initialValues={initialFormValues} validate={registrationValidation} onSubmit={(formValues: any) => onFormSubmit(formValues)}>
          {({ isValid, dirty }) => ( 
            <Form>
              <div className={styles.blockSignUpForm__input_group}>
                <CommonInputForm placeholder={'Name'} type={'name'} name={'name'} />
                <CommonInputForm placeholder={'LastName'} type={'lastName'} name={'lastName'} />
                <CommonInputForm placeholder={'Login'} type={'login'} name={'login'} />
                <CommonInputForm placeholder={'Password'} type={'password'} name={'password'} /> 
              </div>
              <div className={styles.blockSignUpForm__button_container}>
                <CommonButton text='Registration' type='default_bg' inForm  disabled={!(isValid && dirty)}/>
                <div className={styles.blockSignUpForm__text_container}>
                    <p className={styles.blockSignUpForm__text}>Already have an account?</p>
                    <p className={styles.blockSignUpForm__text_link} onClick={handleSingInClick}>Sign In</p>
                </div>
              </div>
            </Form>
          )}
      </Formik>
    </div>
  )
}

