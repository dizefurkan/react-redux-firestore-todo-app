import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import store from "./store";

import App from "./App";
import theme from "./theme";
// import reportWebVitals from './reportWebVitals';
import GlobalStyle from "./theme/style";
import "src/theme/modern-normalize.css";

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<div />}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
