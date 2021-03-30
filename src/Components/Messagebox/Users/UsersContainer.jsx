import {connect} from "react-redux";
import Users from "./Users";
import PreLoader from "../../PreLoader/Preloader";
import {usersAPI} from "../../../API/api";
import {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching, unfollowUpsuccess, followUpsuccess, disableButton

} from "../../../Redux/users-reducer";
import * as React from "react";
import {compose} from "redux";
import {withRouter} from "react-router";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        usersAPI.setUserPage(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        return (
            <div>
                <div>{this.props.isFetching ? <PreLoader/> : null}</div>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       isFetching={this.props.isFetching}
                       followUpsuccess={this.props.followUpsuccess}
                       unfollowUpsuccess={this.props.unfollowUpsuccess}
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
        isDisabledButton: state.UsersPage.isDisabledButton
    }
}
export default compose(connect(mapStateToProps, {
    unfollowUpsuccess, followUpsuccess, setUsers, setCurrentPage,
    setTotalUsersCount, toggleIsFetching, disableButton}
), withRouter)(UsersContainer)
