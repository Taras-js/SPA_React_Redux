import {
    getPersonalData,
    updateNewsPostText,
    writePost
} from "../../../Redux/personal-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as React from "react";
import {withRouter} from "react-router";
import {compose} from "redux";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
if (!userId) {
userId =2;
}
 this.props.getPersonalData(userId);
  }
    render() {
        return (
        <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
    let mapStateToProps = (state) => {
    return {
        PersonalPage: state.PersonalPage,
        newTextMessage: state.PersonalPage.newTextMessage,
        newTextPost: state.PersonalPage.newTextPost,
        profile: state.PersonalPage.profile
    }
}
// let withUrlDataContainerComponent = withRouter(ProfileContainer);
export default compose(connect(mapStateToProps, {getPersonalData, writePost, updateNewsPostText}),
    withRouter)(ProfileContainer);
