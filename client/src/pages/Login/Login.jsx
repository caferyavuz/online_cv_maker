import React, { useState } from 'react';
import './Login.css'; // Stil dosyasını eklediğinizden emin olun

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Email and password are required.');
    } else {
      setError('');
      // Giriş işlemi burada gerçekleştirilir
      console.log('Email:', email);
      console.log('Password:', password);
      // Burada bir API çağrısı yapabilirsiniz
    }
  };

  return (
    <div className="login-page">
      <div className="left-side">
        <div className="overlay">
        </div>
      </div>
      <div className="right-side">
        <div className="login-container">
          <h1 className="login-title">Login</h1>
          <p className="login-subtitle">Sign Into Your Account</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder='Enter a email'
                onChange={handleChangeEmail}
                autoComplete='off'
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder='Enter a password'
                onChange={handleChangePassword}
                autoComplete='off'
              />
              <div className="forgot-password">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="login-button">Login</button>
          </form>

          <div className="or-login-with">
            <span>Or Login with</span>
          </div>
          <button className="google-login-button">
            <div className="google-icon">G</div>
            <div className="google-text">Google</div>
          </button>
          <p className="register-text">
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
