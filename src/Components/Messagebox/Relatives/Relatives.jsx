import React, {} from 'react';
import s from './Relatives.module.css'
import Mother from "./Mother/Mother";
import Father from "./Father/Father";
import {Redirect} from "react-router";



const Relatives = (props) => {
    if (!!props.isAuth) return <Redirect to='/login' />;
    return (
        <div className={s.relatives}>
                <Mother />
                <Father />

        </div>
    );
}
export default Relatives;