// main.tsx
import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import AppRoutes from "./Routes"; // Import the renamed component

// Redux Imports
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
