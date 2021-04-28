import React, {} from 'react';
import {NavLink} from "react-router-dom";
import s from './Toolbar.module.css';
import Addfriends from "./Addfriends/Addfriends";

const Toolbar = (props) => {
    return (
        <div className={s.toolsbox}>
            <nav className={s.nav}>
                <div><NavLink className={s.item} to={`/profile/${props.userId}`}> Profile </NavLink></div>
                <div><NavLink className={s.item} to="/message"> Messages </NavLink></div>
                <div><NavLink className={s.item} to="/contacts"> Contacts </NavLink></div>
                <div><NavLink className={s.item} to="/users"> Users </NavLink></div>
                <div><NavLink className={s.item} to="/friends"> Friends </NavLink></div>
                <div><NavLink className={s.item} to="/calculator"> Calculator </NavLink></div>
                <div><NavLink className={s.item} to="/photos"> Photos </NavLink></div>
                <div><NavLink className={s.item} to="/taskManager"> TaskManager </NavLink></div>
                <div><NavLink className={s.item} to="/login"> Login </NavLink></div>

            </nav>

            <Addfriends />
        </div>

    );
}
export default Toolbar;