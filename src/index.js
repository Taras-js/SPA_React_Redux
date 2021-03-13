import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './Redux/store-redax'
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";


export let rerenderAll = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
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
