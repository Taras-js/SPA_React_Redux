import React, {} from 'react';
import ContactContainer from "./Contacte/ContactСontainer";
import {Redirect} from "react-router";

const Contacts = (props) => {
    if (!!props.isAuth) return <Redirect to='/login' />;
    return (
        <ContactContainer/>
    );
}
export default Contacts;