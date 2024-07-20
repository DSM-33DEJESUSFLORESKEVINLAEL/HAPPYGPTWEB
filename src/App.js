import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Account from './pages/Account';
import HowToUse from './pages/HowToUse';
import Auth from './pages/Auth';
import ChatGPT from './components/ChatGPT';
import LoginForm from './components/LoginForm';
import WelcomeScreen from './components/WelcomeScreen';
import RegisterForm from './components/RegisterForm';
import ResetPasswordForm from './components/ResetPasswordForm'; // Asegúrate de importar tu componente de restablecimiento de contraseña
import './styles/App.css';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Redirige después de 3 segundos

    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  }, []);

  return (
    <div className="App">
      <Router>
        {showWelcome ? (
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
          </Routes>
        ) : (
          <MainApp />
        )}
      </Router>
    </div>
  );
};

const MainApp = () => {
  const location = useLocation();

  // Rutas donde no deseas mostrar el Header
  const noHeaderRoutes = ['/login', '/register', '/resetpassword'];

  return (
    <>
      {!noHeaderRoutes.includes(location.pathname.toLowerCase()) && <Header />}
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/resetpassword" element={<ResetPasswordForm />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chatgpt" element={<ChatGPT />} />
        <Route path="/account" element={<Account />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
};

export default App;
