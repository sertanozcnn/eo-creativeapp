import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./router/router";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
