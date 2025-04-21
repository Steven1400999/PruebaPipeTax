import React, { createContext, useState } from 'react';

export const BackendContext = createContext();

export const BackendProvider = ({ children }) => {
  const [apiUrl, setApiUrl] = useState('http://localhost:5000');

  return (
    <BackendContext.Provider value={{ apiUrl, setApiUrl }}>
      {children}
    </BackendContext.Provider>
  );
};
