import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import ResetPasswordForm from '../components/ResetPasswordForm';
import '../styles/Auth.css';

const Auth = () => (
  <div className="auth-container">
    <nav>
      <ul>
        <li><Link to="/auth/login">Iniciar Sesión</Link></li>
        <li><Link to="/auth/register">Registrar</Link></li>
        <li><Link to="/auth/reset-password">Restablecer Contraseña</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="login" element={<LoginForm />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="reset-password" element={<ResetPasswordForm />} />
    </Routes>
  </div>
);

export default Auth;
