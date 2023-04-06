import React, { useState } from 'react';
import AboutAuth from './AboutAuth';
import './Login.css'
import {useDispatch, useSelector} from 'react-redux';
import { signUp,logIn } from '../../actions/authactions';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';

const Login = () => {
  const [isSignUp,setIsSignUp] =useState(false)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const dispatch=useDispatch();
  const handleSwitch=()=>{
    setIsSignUp(!isSignUp)
  }
  const alert=useAlert();
  const navigate=useNavigate();
  const {isAuthenticated}=useSelector(state=>state.user)
  console.log(isAuthenticated);
  if(isAuthenticated){
    navigate('/');
    console.log(isAuthenticated);
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    if (isSignUp){
      dispatch(signUp({
        name:name,
        email:email,
        password:password
      }))
      navigate('/login');
      alert.success('Registered Successfully, please login to continue');
      setIsSignUp(false)
    }
    else{
      dispatch(logIn({
        email:email,
        password:password
      }))
      navigate('/');
      alert.success('Logged In Successfully');
    }
  }
  
  return (
    <section className='auth-section'>  
        {isSignUp && (
          <AboutAuth/>
        )}
        <div className='auth-container-2'>
          {!isSignUp && <img src='/assets/icon.png' alt='logo' className='login-logo'/>}
          <form onSubmit={submitHandler}>
            {
              isSignUp && (
                <label htmlFor='name'>
                  <h4>Display Name</h4>
                  <input type='text' name='name' id='name' onChange={(e)=>{setName(e.target.value)}} required/>
                </label>
              )
            }
            <label htmlFor='email'>
              <h4>Email </h4>
              <input type='email' name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}} required/>
            </label>
            <label htmlFor='password'>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <h4>Password </h4>
                { !isSignUp && <p style={{color:'#007ac6',fontSize:'13px'}}>forgot password?</p>}
              </div>
              <input type='password' name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}} required/>
              
            </label>
            <button type='submit' className='auth-btn'>{isSignUp?'SignUp':'Login'}</button>
            {isSignUp&&(
              <p style={{color:'#666767',fontSize:'13px'}}>
                By clicking "SignUp" you agree to the 
                <span style={{color:'#007ac6'}}><br/> terms and conditions</span>
              </p>
            )}
          </form>
          <p>
              {isSignUp?'Already have an account?':'Dont have an account?'}
              <button type="button" className='handle-switch-btn' onClick={handleSwitch}>{isSignUp ? "Login":"signup"}</button>
            </p>
        </div>
    </section>
  );
}

export default Login;
