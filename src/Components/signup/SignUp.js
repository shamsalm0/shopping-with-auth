import React, { useContext, useState } from 'react';
import '../LogIn/SignIn.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
const SignUp = () => {
    const [error,setError]=useState('')
   const {createUser}=useContext(AuthContext)
   const navigate=useNavigate()
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirmPassword=form.confirm.value;
        if(password.length<6){
            setError('Password should be atleast 6 character');
            return
        }
        if(password!==confirmPassword){
            setError('Password did not match');
            return;
        }

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset();
            navigate('/')
        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <div className="container">
        <div className='sign-in'>
       <h2>SignUp</h2> 
       <form onSubmit={handleSubmit} action="">
        <div className="email-input">
            <h4>Email</h4>
        <input type="email" name='email' placeholder='Email' /> 
        </div>
        <div className="password-input">
            <h4>Password</h4>
        <input type="password" name='password' placeholder='Password' />
        </div>
        <div className="password-input">
            <h4>Confirm Password</h4>
        <input type="password" name='confirm' placeholder='Password' />
        </div>
        <button className='sign-btn'><p>Sign in</p></button>
       </form>
       <p className='create-account'>Already have an account? <Link to='/signin'>Sign In</Link></p>
       <p>{error}</p>
    </div>
    </div>
    );
};

export default SignUp;