import React, {} from 'react';
import s from './Photos.module.css'
import Slider from "./Slider/Slider";
import {Redirect} from "react-router";

const Photos = (props) => {

    if (!!props.isAuth) return <Redirect to='/login' />;

    return (
        <div className={s.photos}>
           <Slider />
        </div>
    );
}
export default Photos;