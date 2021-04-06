import React, {} from 'react';
import s from './Messages.module.css';
import Message from "./Messages/Message";
import {Redirect} from "react-router";


const Messages = (props) => {
    if (!!props.isAuth) return <Redirect to='/login' />;
    return (
        <div className={s.messages}>
            <Message />

        </div>
    );
}
export default Messages;