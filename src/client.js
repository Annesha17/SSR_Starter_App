import React from "react";
import hydrate from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import App from "./components/app";

const state = window.__state__;

delete window.__state__;

const store = configureStore(state);

hydrate(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById("#app")
)

