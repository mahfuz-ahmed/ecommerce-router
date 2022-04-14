import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" 
                    placeholder='Enter Your Email'></input>
                    <br />
                    <input type="password" name='' id='' 
                    placeholder='Enter your password' />
                    <br />
                    <input type="password" name='' id='' 
                    placeholder='Re-Enter your password' />
                </form>
                <p>Already have an account ? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;