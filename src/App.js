import React, {} from 'react';
import './App.css';
import Toolbar from "./Components/Toolbar/Toolbar";
import Decksite from "./Components/Decksite/Decksite";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Redux/store-redax"

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className='wrapper'>
                    <HeaderContainer/>
                    <Toolbar/>
                    <Decksite/>
                </div>
            </Provider>
        </BrowserRouter>);
}
export default App;