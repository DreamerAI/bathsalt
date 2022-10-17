import React from 'react';
import './Message.css';
import dataMessage from './dataMessage';

function Message() {
  let rand = Math.floor(Math.random() * dataMessage.length);

  let randomMessage = dataMessage[rand];

  return (
    <div className="message container">
      <div className="message__header">
        <p>Индивидуальное послание</p>
      </div>
      <div className="message__content">
        <p>{randomMessage}</p>
      </div>
    </div>
  );
}

export default Message;
