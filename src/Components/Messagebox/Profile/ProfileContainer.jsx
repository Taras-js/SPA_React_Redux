import React, {} from 'react';
import {updateNewsPostTextActionCreator, writePostActionCreator} from "../../../Redux/personal-reducer";
import Profile from "./Profile";



const ProfileContainer = (props) => {
    let state=props.store.getState();
    let writePost = () => {
        props.dispatch(writePostActionCreator());
    };

    let changeClick = (text) => {

        let action = updateNewsPostTextActionCreator(text);
        props.dispatch(action);
    };
    return (
        <Profile writePost={writePost} changeClick={changeClick}
                 newTextMessage={state.PersonalPage.newTextMessage}
                 newTextPost={state.PersonalPage.newTextPost}
                 PersonalPage={state.PersonalPage}
        />
    );
}
export default ProfileContainer;