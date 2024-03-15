import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import loginLogo from "../assets/img/login.png";
import React from 'react';

function App() {
  return (
    <div className="Login" class="container d-flex align-items-center justify-content-center">
      <div class="login">
        <div class="login-logo">
        <img src={loginLogo} alt="login-logo"/>
        </div>
        <div className="input-user">
          <input type='text' placeholder='Email' />
          <input type="password" placeholder='Password' />
        </div>
      </div>
    </div>
  );
}

export default App;
