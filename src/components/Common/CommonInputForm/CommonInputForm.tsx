import React, { useState } from 'react';
import styles from './commonInputForm.module.scss';


import deleteIco from '@/assets/svg/Delete.svg';
import closeEye from '@/assets/svg/PasswordClose.svg';
import openEye from '@/assets/svg/PasswordOpen.svg'
import { useField } from 'formik';

type Props = {
    placeholder: string;
    type: string
    name: string;
    disabled?: any;
    className?: any;
}

export const CommonInputForm = function ( props:Props ) {

    const {placeholder, type, name, disabled, className} = props

    const [passwordView, setPasswordView] = useState<boolean>(true);

    const [field, meta, helpers] = useField(name);    
    const { setValue } = helpers;

    const handleViewPassword = () => {
        setPasswordView((prev: boolean) => !prev)
    };

    const handleDeleteValue = () => {
        setValue(setValue(''))
    };

    const passwordIcon = type === 'password' ? (
        <div className={styles.commonInputForm__icon} onClick={handleViewPassword}>
            {passwordView ? <img src={openEye} alt="" /> : <img src={closeEye} alt="" />}
        </div>
    ) : null;
    
    const deleteValueIcon = field?.value ? (
        <img src={deleteIco} alt="" className={styles.commonInputForm__icon} onClick={handleDeleteValue} />
    ) : null;
    
    const errorText = meta.error && meta.touched ? (
        <p className={styles.commonInputForm__err_text}>{meta.error}</p>
    ) : null;

  return (
    <div className={`${styles.commonInputForm} ${className ? className : ''}`}>
        <div className={`${styles.commonInputForm__container} ${meta.touched && meta.error ? styles.commonInputForm__error : ''}`}>
            <input
                type={type === 'password' && !passwordView ? 'text' : type}
                disabled={disabled}
                {...field} 
                className={`${styles.commonInputForm__input} `}
                placeholder={placeholder}
            />
           {passwordIcon}
           {deleteValueIcon}
        </div>
        {errorText}
    </div>
  )
}

