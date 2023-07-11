import './styles/index.css';
import './styles/global.module.css';

import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

const { REACT_APP_AUTH_KEY, REACT_APP_QW } = process.env;

console.log('REACT_APP_AUTH_KEY', REACT_APP_AUTH_KEY, REACT_APP_QW);
