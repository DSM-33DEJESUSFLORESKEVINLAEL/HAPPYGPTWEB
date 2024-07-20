import React, { useState } from 'react';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebaseConfig';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login exitoso!');
      navigate('/home');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      setErrorMessage('Correo electrónico o contraseña incorrectos');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form-container">
          <h2 className="login-title">INICIAR SESIÓN</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                required
              />
            </div>
            <button type="submit" className="login-button">
              INICIAR SESIÓN
            </button>
          </form>
          <p className="register-link">
            ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
          </p>
          <p className="forgot-password-link">
            ¿Olvidaste tu contraseña? <Link to="/resetpassword">Restablecer aquí</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
