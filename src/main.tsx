// index.js
import React from 'react';
import "./index.css"
import ReactDOM from 'react-dom';
import AppRoutes from './Routes'; // Import the renamed component

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);
