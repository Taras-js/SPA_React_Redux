// import React, {} from 'react';
import {updateNewsPostTextActionCreator, writePostActionCreator} from "../../../Redux/personal-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        PersonalPage: state.PersonalPage,
        newTextMessage: state.PersonalPage.newTextMessage,
        newTextPost: state.PersonalPage.newTextPost
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        writePost: () => {
            dispatch(writePostActionCreator());
        },
        changeClick: (text) => {
            let action = updateNewsPostTextActionCreator(text);
            dispatch(action);
        }
    }
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ProfileContainer;