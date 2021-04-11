import React, {} from 'react';
import s from './Decksite.module.css';
import {Route} from "react-router-dom";
import Messages from "./Message/Messages";
import Friends from "./Friends/Friends";
import Photos from "./Photos/Photos";
import Login from "./Login/Login";
import Contacts from "./Contacts/Contacts";
import Calculator from "./Calculator/Calculator";
import ProfileContainer from "./Profile/ProfileContainer";
import UsersContainer from "./Users/UsersContainer";
import TaskManagerContainer from "./TaskManager/taskManagerContainer";

const Decksite  = (props) => {
    return (
        <div className={s.decksite}>
            <Route className={s.item} path='/profile/:userId' render={() => <ProfileContainer/>}/>
            <Route className={s.item} path='/message' render={() => <Messages />}/>
            <Route className={s.item} path='/contacts' render={() => <Contacts />}/>
            <Route className={s.item} path='/users' render={() => <UsersContainer />}/>
            <Route className={s.item} path='/friends' render={() => <Friends />}/>
            <Route className={s.item} path='/calculator' render={() => <Calculator />}/>
            <Route className={s.item} path='/photos' render={() => <Photos />}/>
            <Route className={s.item} path='/taskManager' render={() => <TaskManagerContainer />}/>
            <Route className={s.item} path='/login' render={() => <Login />}/>
        </div>
    );
}
export default Decksite;