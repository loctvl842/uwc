import React from "react";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./features/store";
import { Provider } from "react-redux";

import App from "./App";

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
);
