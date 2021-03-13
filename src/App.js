import React, {} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Toolbar from "./Components/Toolbar/Toolbar";
import Messagebox from "./Components/Messagebox/Messagebox";


const App = (props) => {
    return (
        <div className='wrapper'>
            <Header/>
            <Toolbar/>
            <Messagebox store={props.store}
                        dispatch={props.dispatch}
            />
        </div>
    );
}
export default App;