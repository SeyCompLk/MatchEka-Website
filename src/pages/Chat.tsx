import React, { useState, useEffect, FormEventHandler } from 'react';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';

const Chat = () => {
  const { matchId }: { matchId: string } = useParams();

  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const newSocket = io('https://pitch-eka.herokuapp.com/ ');
    setSocket(newSocket);
  }, [setSocket]);

  socket.on('connect', () => {
    socket.emit('join-room', { matchId });
  });

  const submitFormHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    socket.emit('message', { matchId, message: 'check' });
  };
  return (
    <div className="filter backdrop-filter backdrop-blur-lg pointer-events-none fixed h-screen w-screen z-10 p-20 mt-0 pt-0">
      <div className="rounded-2xl shadow-lg mb-14 mx-5 flex justify-center items-center m-10 backdrop-brightness-50 bg-white h-5/6 w-full text-xl">
        <form onSubmit={submitFormHandler}>
          <input></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
