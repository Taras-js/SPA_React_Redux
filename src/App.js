import React, {} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Toolbar from "./Components/Toolbar/Toolbar";
import Messagebox from "./Components/Messagebox/Messagebox";


const App = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <Toolbar/>
            <Messagebox />
        </div>
    );
}
export default App;