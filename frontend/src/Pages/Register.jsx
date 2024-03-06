import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import validation from '../Components/SignUpValidation';
import axios from 'axios';

function Register() {
    const [values, setValues] = useState({

    emailReg: '',
    passwordReg: '', 
    })

    const [FnameReg, setFirstName] = useState("");
    const [LnameReg, setLastName] = useState("");
    const [emailReg, setEmail] = useState("");
    const [passwordReg, setPassword] = useState("");
    const [errors, setErrors] = useState({});


    function handleSubmit(event) {
        event.preventDefault();
        setErrors(validation(values));
        {
            
            axios.post('http://localhost:3000/Register', 
            { 
                FirstName: FnameReg,
                LastName: LnameReg,
                Email: emailReg,
                Password: passwordReg
            
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
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
                        <input type="text" id="inputFirstName" placeholder='First Name' className="form-control" style={{ width: '140px' }} name='FnameReg'
                            onChange={(e) => {
                                setFirstName(e.target.value)
                                }} 
                                />
                    <hr className="my-1" />




                        <input type="text" id="inputLastName" placeholder='Last Name' className="form-control" style={{ width: '140px', marginLeft: '60px' }} name='LnameReg'
                             onChange={(e) => {setLastName(e.target.value)}} />

                    </div>
                    <label htmlFor="inputEmail" className="form-label mt-4" >Email</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" name='emailReg'
                         onChange={(e) => {setEmail(e.target.value)}} />

                    {errors.emailReg && <span className='text-danger'> {errors.emailReg} </span>}

                    <hr className="my-1" />

                    <label htmlFor="inputLastName" className="form-label mt-4" >Password</label>

                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" autocomplete="off" name = 'passwordReg'
                         onChange={(e) => {setPassword(e.target.value)}}
                    />
                    {errors.passwordReg && <span className='text-danger'> {errors.passwordReg}</span>}

                    <button type="submit" className="btn btn-secondary">Create Account</button>
                    <p>Already have an Account? <Link to='/Login'>Login</Link></p>
                </form>

            </div>
        </>
    );
}

export default Register;