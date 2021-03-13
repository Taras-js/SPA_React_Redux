import React, {} from 'react';
import s from './Messages.module.css';
import Message from "./Messages/Message";


const Messages = () => {
    return (
        <div className={s.messages}>
            <Message />

        </div>
    );
}
export default Messages;