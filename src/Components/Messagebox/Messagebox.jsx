import React, {} from 'react';
import s from './Messagebox.module.css';
import {Route} from "react-router-dom";
import Messages from "./Message/Messages";
import Friends from "./Friends/Friends";
import Photos from "./Photos/Photos";
import Login from "./Login/Login";
import Contacts from "./Contacts/Contacts";
import Relatives from "./Relatives/Relatives";
import ProfileContainer from "./Profile/ProfileContainer";
import UsersContainer from "./Users/UsersContainer";

const Messagebox = (props) => {

    return (
        <div className={s.messagebox}>
            <div><img className={s.img} alt='disabled'
                      src={'https://images.pexels.com/photos/414320/pexels-photo-414320.' +
                      'jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
            </div>
            <Route className={s.item} path='/profile/:userId'
                   render={() => <ProfileContainer/>}/>
            <Route className={s.item} path='/contacts'
                   render={() => <Contacts/>}/>
            <Route className={s.item} path='/message' render={() => <Messages/>}/>
            <Route className={s.item} path='/friends' render={() => <Friends/>}/>
            <Route className={s.item} path='/users' render={() => <UsersContainer/>}/>
            <Route className={s.item} path='/relatives' render={() => <Relatives/>}/>
            <Route className={s.item} path='/photos' render={() => <Photos />}/>
            <Route className={s.item} path='/login' render={() => <Login/>}/>
        </div>
    );
}
export default Messagebox;