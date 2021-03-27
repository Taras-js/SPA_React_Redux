import React, {} from 'react';
import './App.css';
import Toolbar from "./Components/Toolbar/Toolbar";
import Messagebox from "./Components/Messagebox/Messagebox";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = () => {
    return (
        <div className='wrapper'>
            <HeaderContainer />
            <Toolbar />
            <Messagebox />
        </div>
    );
}
export default App;