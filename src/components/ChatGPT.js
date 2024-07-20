import React, { useState } from 'react';
import '../styles/ChatGPT.css';

const ChatGPT = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="container">
      <main className="content">
        <header className="header">
          <div className="header-left">
            <p>ChatGPT</p>
          </div>
        </header>
        <div className="main-content">
          <div className="cards">
            <div className="card">
              <p>Mensaje para consolar a una amiga</p>
            </div>
            <div className="card">
              <p>Quiero estudiar vocabulario</p>
            </div>
            <div className="card">
              <p>Curiosidad sobre el Imperio romano</p>
            </div>
            <div className="card">
              <p>Una historia de mi género favorito</p>
            </div>
          </div>
          <div className="input-section">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Escribe tu mensaje..."
            />
            <button onClick={handleSendMessage}>Enviar</button>
          </div>
          <div className="messages-section">
            {messages.map((message, index) => (
              <div key={index} className="message">
                {message}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatGPT;
