import React from 'react';
import './Message.css';

import dataMessage from './dataMessage';

function Message({ anchorButton }) {
  // Pull random message from dataMessage array

  let rand = Math.floor(Math.random() * dataMessage.length);
  let randomMessage = dataMessage[rand];

  return (
    <div className="message container">
      <div className="message__firstBall ball__glow"></div>
      <div className="message__secondBall ball__glow"></div>
      <div className="message__thirdBall ball__glow"></div>
      <div className="message__header">
        <p>Индивидуальное послание</p>
      </div>
      <div className="message__content">
        <span>{randomMessage}</span>
        <p>
          <a className="message__anchor--btn" href={`#${anchorButton}`}>
            Послушать музыку
          </a>
        </p>
      </div>
    </div>
  );
}

export default Message;
