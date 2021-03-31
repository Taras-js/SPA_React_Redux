import React, {Component} from "react";
import {Redirect} from "react-router";


 export const witchAutoRedirect = (Component) => {
    class autoRedirect extends React.Component {
        render() {
            if (!!this.props.isAuth) return <Redirect to='/login'/>;
            return <Component {...this.props} />
        }
    }
        return Redirect
}