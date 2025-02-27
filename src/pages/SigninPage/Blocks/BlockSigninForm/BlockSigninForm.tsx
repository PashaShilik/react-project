
import React from 'react';
import styles from './blockSigninForm.module.scss';

import { Formik, Form } from 'formik';
import { initialFormValuesLogin, loginValidation } from '@/helpers/authValidation/authValidation';
import { useNavigate } from 'react-router-dom';
import {CommonInputForm} from '../../../../components/Common/CommonInputForm/CommonInputForm';
import {CommonButton} from '../../../../components/Common/CommonButton/CommonButton';
import { ROUTES } from '../../../../routes/routes';
import { useAppDispatch } from '../../../../redux/store';
import { setMessageModal, setModalByName } from '../../../../redux/reducers/modalReducer/modalReducer';
import { setAuthInfo, setIsAuth } from '../../../../redux/reducers/userReducer/userReducer';

export const BlockSigninForm = function () {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onFormSubmit = (formValues:any) => {
        const storedUsers = localStorage.getItem('Users');
        const usersFromLocalStorage = storedUsers ? JSON.parse(storedUsers) : [];
        const isUsersExist = usersFromLocalStorage.find((user:any) => user.login === formValues.login);
        const isInCorrectPassword = isUsersExist?.password !== formValues.password;

        if(isUsersExist && !isInCorrectPassword){
            localStorage.setItem('AuthMe', JSON.stringify(formValues));
            dispatch(setAuthInfo(formValues));
            dispatch(setIsAuth({isAuth:true}));
            navigate(ROUTES.home); 
        }else{
            dispatch(setModalByName({ isModalActive: true, modalName: 'modal-feedback', withDarkOverlay: true }));
            dispatch(setMessageModal('You have entered an incorrect login or password!'));
        }
    };

    const handleSingUpClick = () => {
        navigate(ROUTES.signup);
    };

    return (
        <div className={styles.blockSigninForm}>
            <Formik initialValues={initialFormValuesLogin} validate={loginValidation} onSubmit={(formValues: any) => onFormSubmit(formValues)}>
                {({ isValid, dirty }) => ( 
                    <Form>
                        <div className={styles.blockSigninForm__input_group}>
                            <CommonInputForm placeholder={'Login'} type={'login'} name={'login'} />
                            <CommonInputForm placeholder={'Password'} type={'password'} name={'password'} /> 
                        </div>
                        <div className={styles.blockSigninForm__button_container}>
                            <CommonButton text='Login' type='default_bg' inForm  disabled={!(isValid && dirty)}/>
                            <div className={styles.blockSigninForm__text_container}>
                                <p className={styles.blockSigninForm__text}>Want to create an account?</p>
                                <p className={styles.blockSigninForm__text_link} onClick={handleSingUpClick}>Registration</p>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
