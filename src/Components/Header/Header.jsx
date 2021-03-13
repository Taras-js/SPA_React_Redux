import React, {} from 'react';
import s from './Header.module.css';
import logo from './logo.svg';

const Header = () => {
    return (
        <div className={s.header}>

            <img className={s.img}     alt='taras'   src="https://image.freepik.com/free-vector/creative-gradient-code-logo_23-2148816024.jpg" />
            <h1 className={s.title} >Taras socialNetwork from React on Redux<img src={logo} alt='about' /></h1>
            <div className={s.registrationForm}>
                <h2 className={s.titleRegistrationForm}>Registration form</h2>
                {/*<input className={s.input} />*/}
                {/*<input className={s.input} />*/}
            </div>


        </div>
    );
}
export default Header;