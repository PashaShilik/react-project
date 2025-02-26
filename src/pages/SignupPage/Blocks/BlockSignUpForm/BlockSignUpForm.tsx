import React from 'react';
import styles from './blockSignUpForm.module.scss';
import { Formik, Form } from 'formik'; 
import { useNavigate } from 'react-router-dom';
import {CommonInputForm} from '../../../../components/Common/CommonInputForm/CommonInputForm';
import {CommonButton} from '../../../../components/Common/CommonButton/CommonButton';
import { initialFormValuesAuth, registrationValidation } from '../../../../helpers/authValidation/authValidation';
import { ROUTES } from '../../../../routes/routes';
import { useAppDispatch } from '../../../../redux/store';
import { setMessageModal, setModalByName } from '../../../../redux/reducers/modalReducer/modalReducer';
import { setAuthInfo, setIsAuth } from '../../../../redux/reducers/userReducer/userReducer';


export const BlockSignUpForm = function () {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onFormSubmit = (formValues: any) => {
    const storedUsers = localStorage.getItem('Users');
    const usersFromLocalStorage = storedUsers ? JSON.parse(storedUsers) : [];
    const lastUserId = usersFromLocalStorage[0];
    const isUsersExist = usersFromLocalStorage.find((user:any) => user.login === formValues.login);

    if(isUsersExist){
      dispatch(setModalByName({ isModalActive: true, modalName: 'modal-feedback', withDarkOverlay: true }));
      dispatch(setMessageModal('A user with this login already exists!'));
    }else{
      const updatedUsers = [...usersFromLocalStorage, {...formValues, id:lastUserId ? lastUserId.id++ : 0}];
      localStorage.setItem('Users', JSON.stringify(updatedUsers));
      localStorage.setItem('AuthMe', JSON.stringify(formValues))
      dispatch(setAuthInfo(formValues));
      dispatch(setIsAuth({isAuth:true}));
      navigate(ROUTES.home);
    }
  };

  const handleSingInClick = () => {
    navigate(ROUTES.signin);
  };

  return (
     <div className={styles.blockSignUpForm}>
      <Formik initialValues={initialFormValuesAuth} validate={registrationValidation} onSubmit={(formValues: any) => onFormSubmit(formValues)}>
          {({ isValid, dirty }) => ( 
            <Form>
              <div className={styles.blockSignUpForm__input_group}>
                <CommonInputForm placeholder={'Name'} type={'name'} name={'name'} />
                <CommonInputForm placeholder={'LastName'} type={'lastName'} name={'lastName'} />
                <CommonInputForm placeholder={'Login'} type={'login'} name={'login'} />
                <CommonInputForm placeholder={'Password'} type={'password'} name={'password'} /> 
              </div>
              <div className={styles.blockSignUpForm__button_container}>
                <CommonButton text='Registration' type='default_bg' inForm />
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

