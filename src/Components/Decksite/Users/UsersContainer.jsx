import * as React from "react";
import {compose} from "redux";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import Users from "./Users";
import PreLoader from "../../PreLoader/Preloader";
import {
    unfollow, follow, disableButton,
    getUsersData
} from "../../../Redux/users-reducer";


class UsersContainer extends React.Component {
    componentDidMount() {
       this.props.getUsersData(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsersData(pageNumber, this.props.pageSize)
            }
    render() {
        return (
            <div>
                <div>{this.props.isFetching ? <PreLoader /> : null}</div>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       isFetching={this.props.isFetching}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       disableButton={this.props.disableButton}
                       isDisabledButton={this.props.isDisabledButton}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        isDisabledButton: state.UsersPage.isDisabledButton,
        isAuth: state.auth.isAuth
    }
}
export default compose(connect(mapStateToProps, {
    unfollow, follow, getUsersData, disableButton}
), withRouter)(UsersContainer)
