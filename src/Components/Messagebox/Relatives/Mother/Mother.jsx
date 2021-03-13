import React, {} from 'react';
import s from './Mother.module.css'
import {NavLink} from "react-router-dom";

const Mother = () => {
    return (
        <div className={s.mother}>
          <div><NavLink className={s.item} to="/profile"> Mother </NavLink></div>
        </div>
    );
}
export default Mother;