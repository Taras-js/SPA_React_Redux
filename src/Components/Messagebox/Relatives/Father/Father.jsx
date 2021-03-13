import React, {} from 'react';
import {NavLink} from "react-router-dom";
import s from './Father.module.css'

const Father = () => {
    return (
        <div className={s.father}>
           <div><NavLink className={s.item} to="/profile"> Father </NavLink></div>
        </div>
    );
}
export default Father;