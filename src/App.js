import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Table from './components/Table'

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const socket = io('https://birdnest-back.fly.dev');
    socket.on('data', (newData) => {
      setData(newData);
    });
    return () => {
      socket.disconnect();
    }
  }, []);

  if (data === null || data === undefined)
    return <></>
  else
    return <Table droneEntries={Object.values(data)}/>;
}

export default App;
