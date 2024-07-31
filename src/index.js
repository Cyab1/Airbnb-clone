import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './Store'
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode Store={Store}>
    <App />
  </React.StrictMode>
);


