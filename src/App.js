import React, {} from 'react';
import s from './App.module.css';
import Toolbar from "./Components/Toolbar/Toolbar";
import DeckSite from "./Components/Decksite/Decksite";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Provider} from "react-redux";
import store from "./Redux/store-redax"
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className={s.wrapper}>
                    <HeaderContainer/>
                    <Toolbar/>
                    <DeckSite/>
                </div>
            </Provider>
        </BrowserRouter>);
}
export default App;