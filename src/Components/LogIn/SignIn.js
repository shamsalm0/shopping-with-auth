import React, { useContext } from 'react';
import './SignIn.css'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
const SignIn = () => {
    const {signIn}=useContext(AuthContext)
   const navigate=useNavigate();

   const location=useLocation();
   const from=location.state?.from?.pathname ||'/';

     const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
         signIn(email,password)
         .then(result=>{
            const user=result.user;
            console.log(user)
            form.reset();
            navigate(from,{replace:true});
         }) 
         .catch(error=>console.error(error))  
     }

    return (
        <div className="container">
            <div className='sign-in'>
           <h2>SignIn</h2> 
           <form onSubmit={handleSubmit} action="">
            <div className="email-input">
                <h4>Email</h4>
            <input type="email" name='email' placeholder='Email' /> 
            </div>
            <div className="password-input">
                <h4>Password</h4>
            <input type="password" name='password' placeholder='Password' />
            </div>
            <button className='sign-btn'><p>Sign in</p></button>
           </form>
           <p className='create-account'>new to this shop <Link to='/signup'>create a new account</Link></p>
        </div>
        </div>
    );
};

export default SignIn;