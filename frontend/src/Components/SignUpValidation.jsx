function validation(values)  {
    let error = {}

    // Check constraints for valid email and at least two characters for password, first name, and last name
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Z]).{2,}$/;
    const namePattern = /^.+$/;

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

    if (values.name === "") {
        error.name = "Name should not be empty";
    }
    else if (!namePattern.test(values.name)) {
        error.name  = "Name format is invalid";
    } else {
        error.name = "";
    }


    return error;
}

export default validation;