import React, {} from 'react';
import s from './Header.module.css';
import logo from './logo.svg';
import {NavLink} from 'react-router-dom';


const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.img}
                 alt='disabled'
                 src="https://image.freepik.com/free-vector/creative-gradient-code-logo_23-2148816024.jpg" />
            <h1 className={s.title} >Taras socialNetwork from React on Redux<img src={logo} alt='disabled' /></h1>
            <div className={s.registrationForm}>
                { props.isAuth
                    ? <div className={s.login}> {props.login} <button onClick={props.logout}> Log out</button></div>
                    : <NavLink to={'/login'}> Login form </NavLink> }
            </div>
        </header>
    );
};
export default Header;