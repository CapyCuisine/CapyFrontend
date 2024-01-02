// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login({ setAuthenticated, setAuthToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://dinoproject.onrender.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur de connexion');
      }

      const data = await response.json();
      const token = data.token;

      console.log('Bearer Token:', token);

      setAuthToken(token);

      setAuthenticated(true);

      navigate('/admin');

    } catch (error) {
      console.error('Erreur lors de la connexion:', error.message);
      // Handle errors, e.g., display an error message to the user
    }
  };

  return (
    <div className="login-container"> 
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
