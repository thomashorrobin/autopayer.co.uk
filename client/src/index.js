import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from 'redux-starter-kit'
import { addressesReducer } from "./Addresses";
import { individualsReducer } from "./Individuals";
import { leasesReducer } from "./Leases";
import { Provider } from 'react-redux';
import { connectSocket } from "./WebSocketManager";

let store = configureStore({
    reducer: {
        addresses: addressesReducer,
        leases: leasesReducer,
        individuals: individualsReducer
    }
});

connectSocket(store);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
