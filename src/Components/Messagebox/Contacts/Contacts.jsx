import React, {} from 'react';
import ContactContainer from "./Contacte/ContactСontainer";


const Contacts = (props) => {

    return (
        <ContactContainer
            store={props.store}
            dispatch={props.dispatch}/>
    );
}
export default Contacts;