import React from 'react';
import './Message.css';

function Message() {
  return (
    <div className="message container">
      <div className="message__header">
        <p>Индивидуальное послание</p>
      </div>
      <div className="message__content">
        <p>
          С тобой все в порядке. Ты ценность. Что бы ни происходило, не вини и не ругай себя. Просто
          скажи себе: «Со мной все в порядке. Я ценность»
        </p>
      </div>
    </div>
  );
}

export default Message;
