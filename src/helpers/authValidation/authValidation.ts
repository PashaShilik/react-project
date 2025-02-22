export const loginValidation = (formValues: { login: string; password: string }) => {
    let errorsObject: { login?: string; password?: string } = {};

    if (!formValues.login) {
        errorsObject.login = 'Required field!';
    } else if (formValues.login.length > 40) {
        errorsObject.login = 'Maximum length 40 characters!';
    }


    if (!formValues.password) {
        errorsObject.password = 'Required field!';
    } else if (formValues.password.length > 30) {
        errorsObject.password = 'Maximum length 30 characters!';
    }

    return errorsObject;
};

export const registrationValidation = (formValues: { login: string; name: string; lastName:string; password: string }) => {
    let errorsObject: { login?: string; name?: string; lastName?:string; password?: string } = {};

    if (!formValues.login) {
        errorsObject.login = 'Required field!';
    } else if (formValues.login.length > 40) {
        errorsObject.login = 'Maximum length 40 characters!';
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
    } else if (formValues.password.length > 30) {
        errorsObject.password = 'Maximum length 30 characters!';
    }

    return errorsObject;
};