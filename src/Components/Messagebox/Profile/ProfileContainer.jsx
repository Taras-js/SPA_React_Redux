import {
    setPersonalData,
    updateNewsPostText,
    writePost
} from "../../../Redux/personal-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as React from "react";
import axios from "axios";
import {withRouter} from "react-router";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
if (!userId) {
userId =2;
}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` +  userId)
            .then(response => {
                this.props.setPersonalData(response.data);
            });

 }
    render() {
        return (
        <Profile {...this.props} profile={this.props.profile}/>
        )
    }
};
    let mapStateToProps = (state) => {
    return {
        PersonalPage: state.PersonalPage,
        newTextMessage: state.PersonalPage.newTextMessage,
        newTextPost: state.PersonalPage.newTextPost,
        profile: state.PersonalPage.profile
    }
}
let withUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {writePost, updateNewsPostText, setPersonalData})(withUrlDataContainerComponent);
