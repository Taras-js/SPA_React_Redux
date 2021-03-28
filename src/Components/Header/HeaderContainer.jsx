import React, {} from 'react';
import Header from "./Header";
import {setAuthPersonalData} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {authAPI} from "../../API/api";
class HeaderContainer extends React.Component{
 componentDidMount() {
     authAPI.authMe()
         .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.setAuthPersonalData(id, login, email)
            }
         });
 }
    render() {
        return (
           <Header {...this.props} />
        );
    }
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
});
export default connect(mapStateToProps, {setAuthPersonalData})(HeaderContainer);