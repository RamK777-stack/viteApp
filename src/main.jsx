import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/tailwind.css";
import App from "./App";
import CustomForm from "./features/CustomForm";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomForm />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
