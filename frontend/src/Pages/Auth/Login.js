import React, { useState } from 'react';
import AboutAuth from './AboutAuth';
import './Login.css'


const Login = () => {
  const [isSignUp,setIsSignUp] =useState(false)
  const handleSwitch=()=>{
    setIsSignUp(!isSignUp)
  }
  
  return (
    <section className='auth-section'>  
        {isSignUp && (
          <AboutAuth/>
        )}
        <div className='auth-container-2'>
          {!isSignUp && <img src='/assets/icon.png' alt='logo' className='login-logo'/>}
          <form>
            {
              isSignUp && (
                <label htmlFor='name'>
                  <h4>Display Name</h4>
                  <input type='text' name='name' id='name' />
                </label>
              )
            }
            <label htmlFor='email'>
              <h4>Email </h4>
              <input type='email' name='email' id='email' />
            </label>
            <label htmlFor='password'>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <h4>Password </h4>
                { !isSignUp && <p style={{color:'#007ac6',fontSize:'13px'}}>forgot password?</p>}
              </div>
              <input type='password' name='password' id='password' />
              
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
