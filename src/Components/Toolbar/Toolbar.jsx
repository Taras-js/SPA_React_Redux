import React, {} from 'react';
import {NavLink} from "react-router-dom";
import s from './Toolbar.module.css';
import Addfriends from "./Addfriends/Addfriends";

const Toolbar = () => {
    return (
        <div className={s.toolsbox}>
            <nav className={s.nav}>
                <div><NavLink className={s.item} to="/profile"> Profile </NavLink></div>
                <div><NavLink className={s.item} to="/message"> Messages </NavLink></div>
                <div><NavLink className={s.item} to="/contacts"> Contacts </NavLink></div>
                <div><NavLink className={s.item} to="/friends"> Friends </NavLink></div>
                <div><NavLink className={s.item} to="/relatives"> Relatives </NavLink></div>
                <div><NavLink className={s.item} to="/fotos"> Fotos </NavLink></div>
                <div><NavLink className={s.item} to="/help"> Help </NavLink></div>

            </nav>

            <Addfriends/>
        </div>

    );
}
export default Toolbar;