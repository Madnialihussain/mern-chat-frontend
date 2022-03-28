  import {io} from 'socket.io-client';
  import React from 'react';

  
  const SOCKET_URL = "http://localhost:5001";

  const socket = io(SOCKET_URL)

  // app context

  const AppContext = React.createContext();

  export {socket, AppContext};