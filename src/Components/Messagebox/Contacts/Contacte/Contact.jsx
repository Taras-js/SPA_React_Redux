import React, {} from 'react';
import s from './Contact.module.css';
import small from './Img/3AlV.gif';
import slep from './Img/3AlT.gif';
import {NavLink} from "react-router-dom";



const Contact = (props) => {

    const ImgItem = (props) => {
        return (
            <div className={s.img}>
                <img alt='disabled' src={props.src}/>
            </div>
        );
    }
    const NameItem = (props) => {
        let path = '/contact/' + props.name.id;
        return (
            <div className={s.name}>
                <NavLink className={s.item}  to={path}> {props.name} </NavLink>
            </div>
        );
    }
    const LetterItem = (props) => {
        return (
            <div className={s.letter}>{props.letter}</div>

        );
    }
    let NameElements = props.MessagesPage.names.map(names => <NameItem  name={names.name} id={names.id}/>);
    let LetterElements = props.MessagesPage.letters.map(letters => <LetterItem   letter={letters.letter} id={letters.id}/>);

    let onWriteMessage = () => {
        props.writeMessage();
    };
    let addNewMessage = React.createRef();
    let ChangeMessageClick = () => {
        let tekst = addNewMessage.current.value;
        props.updateNewTextMessage(tekst);
    };


    return (
        <div className={s.contact}>
            <div>
                <ImgItem src={slep} id='1'/>
                <ImgItem src={small} id='2'/>
                <ImgItem src={slep} id='3'/>
                <ImgItem src={small} id='4'/>
                <ImgItem src={slep} id='5'/>
                <ImgItem src={small} id='6'/>
            </div>
            <div>
                {NameElements}
            </div>
            <div>
                {LetterElements}
            </div>
            <div>
                <textarea onChange={ChangeMessageClick}
                          ref={addNewMessage}
                          value={props.newTextMessage}/>
            </div>
            <div>
                <button onClick={onWriteMessage}>Send me</button>
            </div>
        </div>
    );
}
export default Contact;
