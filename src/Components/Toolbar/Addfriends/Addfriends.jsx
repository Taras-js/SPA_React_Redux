import React, {} from 'react';
import {NavLink} from "react-router-dom";
import s from './Addfriends.module.css';

const Addfriends = () => {
    return (

        <nav className={s.addfriends}>
            <div><NavLink className={s.item} to="/alexandra"> Alexandra </NavLink></div>
            <div><NavLink className={s.item} to="/maksim"> Maksim </NavLink></div>
            <div><NavLink className={s.item} to="/kirill"> Kirill </NavLink></div>
            <div><NavLink className={s.item} to="/frank"> Frank </NavLink></div>
            <div><NavLink className={s.item} to="/pepe"> Pepe </NavLink></div>
            <div><NavLink className={s.item} to="/fred"> Fred </NavLink></div>
            <div><NavLink className={s.item} to="/harry"> Harry </NavLink></div>
        </nav>

    );
}
export default Addfriends;