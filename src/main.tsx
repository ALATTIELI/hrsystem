// index.js
import React from 'react';
import "./index.css"
import ReactDOM from 'react-dom';
import AppRoutes from './Routes'; // Import the renamed component
import { CartProvider } from './pages/stockorder/cartcontext'; // Import your CartProvider


ReactDOM.render(
  <React.StrictMode>
  <CartProvider>
    <AppRoutes />
  </CartProvider>
</React.StrictMode>,
  document.getElementById('root')
);
