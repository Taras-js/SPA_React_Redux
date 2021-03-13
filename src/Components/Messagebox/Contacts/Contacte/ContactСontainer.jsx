import React, {} from 'react';

import {
    updateNewsMessageTextActionCreator,
    writeMessageActionCreator
} from "../../../../Redux/messages-reducer";
import Contact from "./Contact";


const ContactContainer = (props) => {
let state=props.store.getState();


    let writeMessage = () => {
        props.store.dispatch(writeMessageActionCreator())
    };


    let onChangeMessageClick = (tekst) => {
        let action = updateNewsMessageTextActionCreator(tekst);
        props.store.dispatch(action);
    };


    return (
        <Contact updateNewTextMessage={onChangeMessageClick}
        writeMessage={writeMessage}
        newTextMessage={state.MessagesPage.newTextMessage}
                 MessagesPage={state.MessagesPage}/>
    );
}
export default ContactContainer;
