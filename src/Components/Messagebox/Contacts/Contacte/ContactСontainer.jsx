import React, {} from 'react';

import {
    updateNewsMessageTextActionCreator,
    writeMessageActionCreator
} from "../../../../Redux/messages-reducer";
import Contact from "./Contact";
import ContextStore from "../../../../ContextStore";


const ContactContainer = () => {
    return (<ContextStore.Consumer>
            {(store) => {
                let state = store.getState();
                let writeMessage = () => {
                    store.dispatch(writeMessageActionCreator())
                };
                let onChangeMessageClick = (tekst) => {
                    let action = updateNewsMessageTextActionCreator(tekst);
                    store.dispatch(action);
                };
                return <Contact updateNewTextMessage={onChangeMessageClick}
                                writeMessage={writeMessage}
                                newTextMessage={state.MessagesPage.newTextMessage}
                                MessagesPage={state.MessagesPage}/>
            }
            }
            }
        </ContextStore.Consumer>
    )
}
export default ContactContainer;
