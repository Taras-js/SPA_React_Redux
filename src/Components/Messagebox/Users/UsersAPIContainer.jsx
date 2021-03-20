import React, {} from 'react';
import * as axios from "axios";
import Users from "./Users";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=
        ${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    };
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=
        ${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };
    render() {
        return (
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
                users={this.props.users}
                />
        )
    }
}
export default UsersAPIContainer;