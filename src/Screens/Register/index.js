import React, { useState } from 'react';
import styles from './styles';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement registration logic here
    console.log('Registration attempt with:', { name, email, password, confirmPassword });
  };

  return (
    <div style={styles.registerContainer}>
      <h2 style={styles.heading}>Register for Hotel Booking</h2>
      <form onSubmit={handleSubmit} style={styles.registerForm}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Full Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
        </div>
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
        <div style={styles.formGroup}>
          <label htmlFor="confirmPassword" style={styles.label}>Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button 
          type="submit" 
          style={styles.registerButton}
          onMouseOver={(e) => e.target.style.backgroundColor = styles.registerButtonHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.registerButton.backgroundColor}
        >
          Register
        </button>
      </form>
      <p style={styles.loginLink}>
        Already have an account? <a 
          href="/login" 
          style={styles.loginLinkAnchor}
          onMouseOver={(e) => e.target.style.textDecoration = styles.loginLinkAnchorHover.textDecoration}
          onMouseOut={(e) => e.target.style.textDecoration = styles.loginLinkAnchor.textDecoration}
        >
          Login here
        </a>
      </p>
    </div>
  );
};

export default Register;
