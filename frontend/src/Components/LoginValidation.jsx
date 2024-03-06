function validation(values)  {
    let error = {}

    // Check constraints for valid email and at least two characters for password, first name, and last name
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Z]).{2,}$/;
    
    if (values.email === "") {
        error.email = "Email should not be empty";
    }
    else if (!emailPattern.test(values.email)) {
        error.email = "Email format is invalid";
    } else {
        error.email = "";
    }

    if (values.password === "") {
        error.password = "Password should not be empty";
    }
    else if (!passwordPattern.test(values.password)) {
        error.password = "Password must be at least two characters long";
    } else {
        error.password = "";
    }

    return error;
}

export default validation;
