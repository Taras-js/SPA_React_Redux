import * as React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {
    getPersonalData, getPersonStatus,
    getUpdatePersonStatus,
    updateNewsPostText,
    writePost
} from "../../../Redux/personal-reducer";
import ProfileData from "./ProfileData";
import ProfileStatus from "./ProfileStatus";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 16069;
        }
        this.props.getPersonalData(userId);
        this.props.getPersonStatus(userId);
    }
    render() {
        return (
            <div>
                <ProfileStatus status={this.props.status}
                               getPersonStatus={this.props.getPersonStatus}
                               getUpdatePersonStatus={this.props.getUpdatePersonStatus}
                />
                <ProfileData    profile={this.props.profile}
                                PersonalPage={this.props.PersonalPage}
                                newTextMessage={this.props.newTextMessage}
                                newTextPost={this.props.newTextPost}
                                isAuth={this.props.isAuth}
                                writePost={this.props.writePost}
                                updateNewsPostText={this.props.updateNewsPostText}
                />
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        PersonalPage: state.PersonalPage,
        newTextMessage: state.PersonalPage.newTextMessage,
        newTextPost: state.PersonalPage.newTextPost,
        profile: state.PersonalPage.profile,
        isAuth: state.auth.isAuth,
        status: state.PersonalPage.status
    }
}
export default compose(connect(mapStateToProps, {getPersonalData, getUpdatePersonStatus,
                                                getPersonStatus, writePost, updateNewsPostText}),
    withRouter) (ProfileContainer);