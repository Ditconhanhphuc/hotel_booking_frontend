import React, { useState } from 'react';
import styles from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div style={styles.loginContainer}>
      <h2 style={styles.heading}>Welcome to Hotel Booking</h2>
      <form onSubmit={handleSubmit} style={styles.loginForm}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button 
          type="submit" 
          style={styles.loginButton}
          onMouseOver={(e) => e.target.style.backgroundColor = styles.loginButtonHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.loginButton.backgroundColor}
        >
          Login
        </button>
      </form>
      <p style={styles.registerLink}>
        Don't have an account? <a 
          href="/register" 
          style={styles.registerLinkAnchor}
          onMouseOver={(e) => e.target.style.textDecoration = styles.registerLinkAnchorHover.textDecoration}
          onMouseOut={(e) => e.target.style.textDecoration = styles.registerLinkAnchor.textDecoration}
        >
          Register here
        </a>
      </p>
    </div>
  );
};

export default Login;
