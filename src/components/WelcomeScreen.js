import React from 'react';
import '../styles/WelcomeScreen.css';

const WelcomeScreen = () => (
  <div className="welcome-container">
    <img src={`${process.env.PUBLIC_URL}/assets/bienvenida/images.jpeg`} alt="Welcome" className="welcome-image" />
    <h1>BIENVENIDOS A HAPPYGPT</h1>
  </div>
);

export default WelcomeScreen;
