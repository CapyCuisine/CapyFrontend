// Login.js
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/login.css'

function Login() {

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const emailRef = useRef(null);
  const navigate = useNavigate();
  
  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLoginForm) {
      const password = passwordRef.current.value;
      const confirmPassword = confirmPasswordRef.current.value;

      if (password !== confirmPassword) {
        setPasswordMatch(false);
        return; 
      }
    }

    const email = emailRef.current.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsValidEmail(false);
      return;
    }

    if (!isLoginForm) {
      navigate('/admin');
    }

  };

  return (
    <div className="login-container">
      <h2>{isLoginForm ? 'Login' : 'Register'}</h2>
      <form>
        {isLoginForm && (
          <>
            <label htmlFor="pseudo">Pseudo:</label>
            <input type="text" id="pseudo" name="pseudo" required />

            <label htmlFor="password">Mot de passe:</label>
            <input type="password" id="password" name="password" required />
          </>
        )}

        {!isLoginForm && (
          <>
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" ref={emailRef} required />
            {!isValidEmail && (
              <p style={{ color: 'red' }}>L'adresse email n'est pas valide.</p>
            )}

            <label htmlFor="pseudo">Pseudo:</label>
            <input type="text" id="pseudo" name="pseudo" required />

            <label htmlFor="password">Mot de passe :</label>
            <input type="password" id="password" name="password" ref={passwordRef} required />

            <label htmlFor="confirmPassword">Confirmer le mot de passe :</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              ref={confirmPasswordRef}
              required
            />
            {!passwordMatch && (
              <p style={{ color: 'red' }}>Les mots de passe ne correspondent pas.</p>
            )}
          </>
        )}

        <div className="button-container">
          <button type="submit" onClick={handleSubmit}>
            Valider
          </button>
          <button type="button" onClick={toggleForm}>
            {isLoginForm ? 'S\'enregistrer' : 'Se connecter'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;