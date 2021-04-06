import React, {} from 'react';
import './App.css';
import Toolbar from "./Components/Toolbar/Toolbar";
import Decksite from "./Components/Decksite/Decksite";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = (props) => {
    return (
        <div className='wrapper'>
            <HeaderContainer />
            <Toolbar />
            <Decksite />
        </div>
    );
}
export default App;