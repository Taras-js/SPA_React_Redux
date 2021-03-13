import React, {} from 'react';
import s from './Relatives.module.css'
import Mother from "./Mother/Mother";
import Father from "./Father/Father";



const Relatives = () => {
    return (
        <div className={s.relatives}>
                <Mother />
                <Father />

        </div>
    );
}
export default Relatives;