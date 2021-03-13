import React, {} from 'react';
import s from './Messagebox.module.css';
import {Route} from "react-router-dom";
import Messages from "./Message/Messages";
import Friends from "./Friends/Friends";
import Photo from "./Fotos/Fotos";
import Help from "./Help/Help";
import Contacts from "./Contacts/Contacts";
import Relatives from "./Relatives/Relatives";
import ProfileContainer from "./Profile/ProfileContainer";
import Users from "./Users/Users";

const Messagebox = () => {
    return (
        <div className={s.messagebox}>
            <div><img className={s.img} alt='disabled'
                      src={'https://images.pexels.com/photos/414320/pexels-photo-414320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
            </div>
            <Route className={s.item} path='/profile'
                   render={() => <ProfileContainer />}/>
            <Route className={s.item} path='/contacts'
                   render={() => <Contacts />}/>
            <Route className={s.item} path='/message' render={() => <Messages/>}/>
            <Route className={s.item} path='/friends' render={() => <Friends/>}/>
            <Route className={s.item} path='/users' render={() => <Users/>}/>
            <Route className={s.item} path='/relatives' render={() => <Relatives/>}/>
            <Route className={s.item} path='/photos' render={() => <Photo/>}/>
            <Route className={s.item} path='/help' render={() => <Help/>}/>
        </div>

    );
}
export default Messagebox;