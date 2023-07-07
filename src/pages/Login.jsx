import React from 'react'
import axios from 'axios'
import { useState } from "react"


import './Login-register.css'


function Login({ onLogin, togglePage }) {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      const { token,data } = response.data;
    
         // Store the token in localStorage
         localStorage.setItem('token', token);
          console.log(token);
          onLogin(data);
    
      } catch (error) {
        console.log(error);
        setResponseMessage(error.message);
      }
    };

  return (
    <div className="Log">
    <div className='form-container'>
      {responseMessage && (
          <p>{responseMessage}</p>
        )}
      <h2>Login</h2>
        <form action="" onSubmit={handleSubmit} className='login-form'>
      
       <label htmlFor="email" >Email</label>
       <input type="email" id='email' placeholder='youremail@gmail.com' value={email} required={true} onChange={(e)=>setEmail(e.target.value)}/>
       <label htmlFor="name">Password</label>
       <input  type="password" id='password' placeholder='********' value={password} required={true} onChange={(e)=>setPassword(e.target.value)} />
       <button type='submit'>Login</button>
      
   </form>
   <button className="link-btn" onClick={togglePage}>Switch to Sign Up</button>
      {/* <button className='link-btn' onClick={()=>props.onFormSwitch('register')}>Don't have an account?Register here</button> */}
    
    </div>
    </div>
  );
}

export default Login