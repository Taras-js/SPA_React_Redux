// import React, {} from 'react';
import {
    updateNewsMessageTextActionCreator,
    writeMessageActionCreator
} from "../../../../Redux/messages-reducer";
import Contact from "./Contact";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newTextMessage: state.MessagesPage.newTextMessage,
        MessagesPage: state.MessagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewTextMessage: (text) => {
            let action = updateNewsMessageTextActionCreator(text);
            dispatch(action);
        },
        writeMessage: (text) => {
            dispatch(writeMessageActionCreator())
        }
    }
}
const ContactContainer = connect (mapStateToProps, mapDispatchToProps)(Contact)
export default ContactContainer;
