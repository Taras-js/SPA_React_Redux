import React, {} from 'react';
import s from './App.module.css';
import Toolbar from './Components/Toolbar/Toolbar';
import DeckSite from './Components/Decksite/Decksite';
import HeaderContainer from './Components/Header/HeaderContainer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { withRouter} from 'react-router-dom';
import {initializedAllApp} from './Redux/app-reducer';
import PreLoader from "./Components/PreLoader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializedAllApp();
    }

    render() {
        if (!this.props.initialized) {
            return <PreLoader/>
        }
        return (

                    <div className={s.wrapper}>
                        <HeaderContainer/>
                        <Toolbar />
                        <DeckSite />
                    </div>
                );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized,


});
export default compose (withRouter, connect(mapStateToProps, {initializedAllApp}))(App);