import React from 'react'
import { useState } from 'react'
import './Login.css'
import { usersData } from '../usersData/users'

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    let  { username, password } = document.forms[0];

    const userData = usersData.find((user) => user.username === username.value);

    if (userData) {
      if (userData.password !== password.value) {
        alert("Not correct password")
      } else {
        setIsSubmitted(true);
      }
    } else {
      alert('Enter Valid Credential')
    }
  };

  return (
    <div className='login-app'>
      <center>
        <p>Login</p>
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
  )
}

export default Login;