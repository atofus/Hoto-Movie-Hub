import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import validation from '../Components/SignUpValidation';

function Register({setShowNavbar}) {
    const [values, setValues] = useState({
        email: '',
        password: '',
        FName: '',
        LName: ''
    })

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        setErrors(validation(values));
        {/** 
            
            axios.post('http://localhost:8081/login', { email, password })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        */}
    }
    return (
        <>
            <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
                <form onSubmit={handleSubmit}>
                    <p className="text-primary-emphasis">Create your account</p>

                    <div style={{ display: 'flex' }}>
                        <label htmlFor="inputFirstName" className="form-label mt-4">Name</label>
                        

                        <label htmlFor="inputLastName" className="form-label mt-4" style={{ marginLeft: '160px' }}>Last Name</label>

                    </div>

                    <div style={{ display: 'flex' }}>
                        <input type="text" id="inputFirstName" placeholder='First Name' className="form-control" style={{ width: '140px' }} name='FName'
                            onChange={handleInput} />
                    <hr className="my-1" />




                        <input type="text" id="inputLastName" placeholder='Last Name' className="form-control" style={{ width: '140px', marginLeft: '60px' }} name='LName'
                            onChange={handleInput} />

                    </div>
                    <label htmlFor="inputEmail" className="form-label mt-4" >Email</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" name='email'
                        onChange={handleInput} />

                    {errors.email && <span className='text-danger'> {errors.email} </span>}

                    <hr className="my-1" />

                    <label htmlFor="inputLastName" className="form-label mt-4" >Password</label>

                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" autocomplete="off" name = 'password'
                        onChange={handleInput}
                    />
                    {errors.password && <span className='text-danger'> {errors.password}</span>}

                    <button type="submit" className="btn btn-secondary">Create Account</button>
                    <p>Already have an Account? <Link to='/Login'>Login</Link></p>
                </form>

            </div>
        </>
    );
}

export default Register;