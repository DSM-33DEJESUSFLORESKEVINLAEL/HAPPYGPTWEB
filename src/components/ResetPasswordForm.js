import React, { useState } from 'react';
import '../styles/ForgotPassword.css';

const ResetPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de restablecer contraseña
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Restablecer Contraseña</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ResetPasswordForm;
