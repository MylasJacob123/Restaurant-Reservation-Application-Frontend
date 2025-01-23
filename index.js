import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import { registerRootComponent } from "expo";

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerRootComponent(RootApp);
