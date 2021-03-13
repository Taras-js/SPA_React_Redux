import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './Redux/store-redax'
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";


export let rerenderAll = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </ Provider>
        </ BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderAll(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderAll(state);
});

reportWebVitals();
