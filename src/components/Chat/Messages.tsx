import React from 'react';
import classes from './Style.module.css';

const Messages = () => {
  const messages = [
    'hi',
    'sup',
    "how's the match?",
    'pretty good man!',
    'will we win this game?',
  ];
  return (
    <div className={classes.ChatBox}>
      <div>
        {messages.map((message) => (
          <p>{message}</p>
        ))}
      </div>
      <form>
        <input placeholder="Enter a message" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Messages;
