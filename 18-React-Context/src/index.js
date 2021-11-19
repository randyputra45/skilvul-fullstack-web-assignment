import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import { CountProvider } from './CountContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CountProvider>
        <App />
      </CountProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);