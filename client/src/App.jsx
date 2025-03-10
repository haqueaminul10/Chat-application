import { useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3000';

function App() {
  useEffect(() => {
    const socket = io(SOCKET_URL, { transports: ['websocket'] });

    socket.on('connect', () => {
      console.log('connected to server');
    });

    socket.on('message', (data) => {
      console.log('Message from server:', data);
    });

    return () => {
      socket.off('message');
      socket.disconnect();
      console.log('Disconnected from server');
    };
  }, []);

  return <>Hello</>;
}

export default App;
