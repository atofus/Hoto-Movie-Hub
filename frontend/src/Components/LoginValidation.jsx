function validation(values)  {
    let error = {}

    // Check constraints for valid email and at least two characters for password, first name, and last name
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Z]).{2,}$/;
    
    if (values.emailReg === "") {
        error.emailReg = "Email should not be empty";
    }
    else if (!emailPattern.test(values.emailReg)) {
        error.emailReg = "Email format is invalid";
    } else {
        error.emailReg = "";
    }

    if (values.passwordReg === "") {
        error.passwordReg = "Password should not be empty";
    }
    else if (!passwordPattern.test(values.passwordReg)) {
        error.passwordReg = "Password must be at least two characters long";
    } else {
        error.passwordReg = "";
    }

    return error;
}

export default validation;