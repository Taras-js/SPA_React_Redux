import * as React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {
    getPersonalData,
    updateNewsPostText,
    writePost
} from "../../../Redux/personal-reducer";
import ProfileData from "./ProfileData";
import ProfileStatus from "./ProfileStatus";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        this.props.getPersonalData(userId);
    }

    render() {
        return (
            <div>
                <ProfileStatus status={this.props.status}/>
                <ProfileData  profile={this.props.profile}
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
        status: 'Hello Programmer'
    }
}
// let withUrlDataContainerComponent = withRouter(ProfileContainer);
export default compose(connect(mapStateToProps, {getPersonalData, writePost, updateNewsPostText}),
                    withRouter) (ProfileContainer);
