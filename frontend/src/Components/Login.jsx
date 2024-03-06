import React from 'react'
import { useState } from 'react';
import 'bootswatch/dist/vapor/bootstrap.min.css';
import axios from 'axios'
import { Link } from "react-router-dom";
import Register from '../Pages/Register';
import validation from './LoginValidation';

function Login() {
    const [values, setValues] = useState({
        emailReg: '',
        passwordReg: ' '
    })

    const [emailReg, setEmail] = useState("");
    const [passwordReg, setPassword] = useState("");
    const [errors, setErrors] = useState({});


    function handleSubmit(event) {
        event.preventDefault();
        setErrors(validation(values));
        {

            axios.post('http://localhost:3001/Login',
                {
                    Email: emailReg,
                    Password: passwordReg

                })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    }


    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="inputEmail" className="form-label mt-4" style={{ color: 'white' }}>Email</label>
                    {/* When input changes, setEmail retrieves value and update email variable */}
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" name='email'

                        onChange={(e) => {
                            setEmail(e.target.value)
                    }} 
                    />

                    <small id="emailHelp" style={{ color: 'white' }} >We'll never share your email with anyone else.</small>
                </div>
                <div className='mb-3'>
                    <label htmlFor="inputPassword" className="form-label mt-4" style={{ color: 'white' }} name='password'>Password</label>
                    {/* When input changes, setPassword retrieves value and update password variable */}

                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" autocomplete="off" name='password'
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />

                </div>
                <button type="submit" className="btn btn-secondary">Login</button>
                <p>Don't have an account? <Link to='/register'>Create Account</Link></p>


            </form>
        </div>
    );
}


export default Login;