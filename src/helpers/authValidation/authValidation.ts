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

export const loginValidation = (formValues: { login: string; password: string }) => {
    let errorsObject: { login?: string; password?: string } = {};

    if (!formValues.login) {
        errorsObject.login = 'Required field!';
    } else if (formValues.login.length < 5) {
        errorsObject.login = 'Minimum length 5 characters!';
    } else if (formValues.login.length > 30) {
        errorsObject.login = 'Maximum length 30 characters!';
    } else if (!/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(formValues.login)) {
        errorsObject.login = 'Only English letters, numbers, and special characters are allowed!';
    }


    if (!formValues.password) {
        errorsObject.password = 'Required field!';
    } else if (formValues.password.length < 8) {
        errorsObject.password = 'Minimum length 8 characters!';
    } else if (formValues.password.length > 50) {
        errorsObject.password = 'Maximum length 50 characters!';
    } else if (!/[A-Z]/.test(formValues.password)) {
        errorsObject.password = 'At least one uppercase letter is required!';
    } else if (!/^[a-zA-Z0-9!#$()%^&*-_+=]+$/.test(formValues.password)) {
        errorsObject.password = 'Only Latin letters, numbers, and special characters are allowed!';
    }

    return errorsObject;
};

export const registrationValidation = (formValues: { login: string; name: string; lastName:string; password: string }) => {
    let errorsObject: { login?: string; name?: string; lastName?:string; password?: string } = {};

    if (!formValues.login) {
        errorsObject.login = 'Required field!';
    } else if (formValues.login.length < 5) {
        errorsObject.login = 'Minimum length 5 characters!';
    } else if (formValues.login.length > 30) {
        errorsObject.login = 'Maximum length 30 characters!';
    } else if (!/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(formValues.login)) {
        errorsObject.login = 'Only English letters, numbers, and special characters are allowed!';
    }

    if (!formValues.name) {
        errorsObject.name = 'Required field!';
    } else if (formValues.name.length > 40) {
        errorsObject.name = 'Maximum length 40 characters!';
    }

    if (!formValues.lastName) {
        errorsObject.lastName = 'Required field!';
    } else if (formValues.lastName.length > 40) {
        errorsObject.lastName = 'Maximum length 40 characters!';
    }

    if (!formValues.password) {
        errorsObject.password = 'Required field!';
    } else if (formValues.password.length < 8) {
        errorsObject.password = 'Minimum length 8 characters!';
    } else if (formValues.password.length > 50) {
        errorsObject.password = 'Maximum length 50 characters!';
    } else if (!/[A-Z]/.test(formValues.password)) {
        errorsObject.password = 'At least one uppercase letter is required!';
    } else if (!/^[a-zA-Z0-9!#$()%^&*-_+=]+$/.test(formValues.password)) {
        errorsObject.password = 'Only Latin letters, numbers, and special characters are allowed!';
    }

    return errorsObject;
};