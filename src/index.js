import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CartStateContext } from "./Static-Pages/Context/CartContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import i18n from "../src/Static-Pages/i18n/i18n";
const root = ReactDOM.createRoot(document.getElementById("fb-root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <CartStateContext>
      <Provider store={store}>
        <GoogleOAuthProvider
          clientId={`722041318373-32h31v5k9bd5pnhisovdvnq12mb1eh5j.apps.googleusercontent.com`}
        >
          <App />
        </GoogleOAuthProvider>
      </Provider>
    </CartStateContext>
  </BrowserRouter>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
