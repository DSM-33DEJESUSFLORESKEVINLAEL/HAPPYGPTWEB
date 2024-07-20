import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <nav className="header">
    <ul>
      <li><Link to="/home">Inicio</Link></li>
      <li><Link to="/chatgpt">ChatGPT</Link></li>
      {/* <li><Link to="/account">Cuenta</Link></li> */}
      <li><Link to="/how-to-use">Cómo se utiliza</Link></li>
    </ul>
  </nav>
);

export default Header;
