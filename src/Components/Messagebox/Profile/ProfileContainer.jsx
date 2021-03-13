import React, {} from 'react';
import {updateNewsPostTextActionCreator, writePostActionCreator} from "../../../Redux/personal-reducer";
import Profile from "./Profile";
import ContextStore from "../../../ContextStore";

const ProfileContainer = () => {
    return (
        <ContextStore.Consumer>
            {
                (store) => {
                    let changeClick = (text) => {
                        let action = updateNewsPostTextActionCreator(text);
                        store.dispatch(action);
                    };
                    let state = store.getState();
                    let writePost = () => {
                        store.dispatch(writePostActionCreator());
                    };
                    return <Profile writePost={writePost} changeClick={changeClick}
                                    newTextMessage={state.PersonalPage.newTextMessage}
                                    newTextPost={state.PersonalPage.newTextPost}
                                    PersonalPage={state.PersonalPage}/>
                }
            }
        </ ContextStore.Consumer>
    );
}
export default ProfileContainer;