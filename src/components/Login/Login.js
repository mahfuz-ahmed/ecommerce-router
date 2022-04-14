import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import "./login.css"

const Login = () => {
    const {signInUsingGoogle}=useAuth();
    const location=useLocation();
    console.log("came from",location.state?.from);
    const redirect_uri=location.state?.from || '/shop';
    const history=useHistory();


    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then(result=>{
            history.push(redirect_uri);
        })
    }
    return (
        <div className='login-form'>
         <div>
         <h1>Login</h1>
            <form onSubmit="">
                <input type="email" name="" id="" placeholder='Enter Email' />
                <br />
                <input type="password" name="" id="" placeholder='Enter Password'/>
                <br />
                <input type="submit" value="Submit"/>
            </form>
            <p>new to ema-john ?<Link to="/register">Create New Account</Link></p>

            <div>Or</div>
            <button onClick={handleGoogleLogin} className='btn-regular'>SignIn With Google</button>
         </div>
        </div>
    );
};

export default Login;