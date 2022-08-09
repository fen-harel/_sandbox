import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux"; // Look up redux
import { createStore, applyMiddleware, compose } from "redux"; 
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from "./App";    // add proxy: server; to package.json of client

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);