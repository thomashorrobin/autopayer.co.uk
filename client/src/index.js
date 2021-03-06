import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import { rootReducers } from "./state";
import { ATTACH_ADDRESSES_TO_LEASES } from "./state/Leases";
import { Provider } from 'react-redux';
import { connectSocket } from "./WebSocketManager";
import logger from 'redux-logger'

const middleware = [...getDefaultMiddleware(), logger]

let store = configureStore({
    reducer: rootReducers,
    middleware
});

window.sendToSocket = connectSocket(store);

setTimeout(() => {
    const addresses = store.getState().addresses;
    store.dispatch({ type: ATTACH_ADDRESSES_TO_LEASES, payload: { addresses } });
}, 1000)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
