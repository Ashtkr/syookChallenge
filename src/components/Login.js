import React from 'react'
import { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { usersData } from '../usersData/users'
import Home from './Home';

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    let  { username, password } = document.forms[0];

    const userData = usersData.find((user) => user.username === username.value);

    if (userData) {
      if (userData.password !== password.value) {
        alert("Wrong password!!!")
      } else {
        setIsSubmitted(true);
        navigate('/home',{replace:true});
      }
    } else {
      alert('Enter Valid Credential')
    }
  };

  return (
    <div className='login-container'>
    <div className='login-app'>
      <center>
        {isSubmitted ? <Home isSubmitted={isSubmitted} setIsSubmitted={isSubmitted}/> : null}
        <p>Login Your Account</p>
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <input type="text" name="username" placeholder='username' required/>
          </div>
          <div className='input-container'>
            <input type="password" name="password" placeholder='password' required />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </center>
    </div>
    </div>
  )
}

export default Login;