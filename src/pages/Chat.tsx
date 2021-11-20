import React from 'react';
import MatchData from '../components/Chat/MatchData';
import Messages from '../components/Chat/Messages';
import Overlay from '../components/UI/Overlay';
// import { useParams } from 'react-router-dom';

const Chat = () => {
  return (
    <Overlay>
      <div>
        <MatchData />
        <Messages />
      </div>
    </Overlay>
  );
};

export default Chat;
