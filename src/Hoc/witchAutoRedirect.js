import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const witchAutoRedirect = (Component) => {
    class AutoRedirectComponent extends React.Component {

        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>;
            return <Component {...this.props} />
        }
    }

    let ConnectedAutoRedirectComponent = connect(mapStateToPropsForRedirect)(AutoRedirectComponent)
    return ConnectedAutoRedirectComponent;
}

