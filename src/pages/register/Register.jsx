import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import axios from 'axios'

export default function Register() {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')

  const handleSubmit = async (e)=>{
    const URL = 'https://qablogapp.herokuapp.com';
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post(`${URL}/api/auth/register`,{
        username,
        email,
        password,
      });
      res.data && window.location.replace("/");
    } catch (error) {
      setError(true);
    }
  };

    return (
      <div className="register">
          <span className="registerTitle">Register</span>
          <form className="registerForm" onSubmit={handleSubmit}>
              <label>Username</label>
              <input 
                type="text" 
                className="registerInput" 
                placeholder="Enter User Name"
                onChange={e=>setUsername(e.target.value)}
                />
              <label>Email</label>
              <input 
                type="text" 
                className="registerInput" 
                placeholder="Enter your email address"
                onChange={e=>setEmail(e.target.value)}
              />
              <label>Password</label>
              <input 
                type="password" 
                className="registerInput" 
                placeholder="Enter your password"
                onChange={e=>setPassword(e.target.value)}
              />
              <button className="registerButton" type ="submit">Register</button>
          </form>
          <button className="registerLoginButton">
            <Link to ="/login" className='link'>Login</Link>
          </button>
          {error && <span style={{color:"red", marginTop:"20px"}}>Something went wrong</span>}
      </div>
    )
  }
  
