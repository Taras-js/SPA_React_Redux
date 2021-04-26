import React, {} from 'react';
import s from './modalWindow.module.css'



const ModalWindow = (props) => {



    return (
        <div className={`s.modal__wrapper ${props.isOpened ? 'open' : 'close' }`}>
            <div className={s.modal__body}>
                <div className={s.modal__close} onClick={props.onModalClose}> X </div>
                <h1>{props.title}</h1>
                <hr/>
                {props.children}

            </div>

        </div>
    );
}
export default ModalWindow;