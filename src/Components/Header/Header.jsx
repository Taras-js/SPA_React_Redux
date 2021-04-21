import React, {} from 'react';
import s from './Header.module.css';
import logo from './logo.svg';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={s.header}>
            <img className={s.img}     alt='taras'   src="https://image.freepik.com/free-vector/creative-gradient-code-logo_23-2148816024.jpg" />
            <h1 className={s.title} >Taras socialNetwork from React on Redux<img src={logo} alt='about' /></h1>
            <div className={s.registrationForm}>
                { props.isAuth ?
                   <div className={s.login}> {`authorized + ${props.login}`}</div>  : <NavLink to={'/login'}>
                    <div className={s.titleRegistrationForm}>Registration form</div></NavLink> }
            </div>
        </div>
    );
};
export default Header;