// main.tsx
import React from 'react';
import "./index.css";
import ReactDOM from 'react-dom';
import AppRoutes from './Routes'; // Import the renamed component

// Redux Imports
import { Provider } from 'react-redux';
import store from './redux/store';  // Assuming you've created a store.js or store.tsx file that exports your store.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
