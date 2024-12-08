import { SnackbarProvider } from 'notistack';
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import App from "./App.jsx";
import { store } from "./redux/store.js";

/*import { BrowserRouter } from "react-router-dom";*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
    <Provider store={store}>
      <App />
    </Provider>
    </SnackbarProvider>
  </React.StrictMode>
);
