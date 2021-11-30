import React from 'react';
import { useLocation } from 'react-router-dom';
import MatchData from '../components/Chat/MatchData';
import Messages from '../components/Chat/Messages';
import Overlay from '../components/UI/Overlay';
import classes from '../styles/Chat.module.css';
// import { useParams } from 'react-router-dom';

const Chat = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const match = query.get('match');
  console.log(match);
  return (
    <Overlay>
      <div className={classes.Container}>
        <MatchData />
        <Messages />
      </div>
    </Overlay>
  );
};

export default Chat;
