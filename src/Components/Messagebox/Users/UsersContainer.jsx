import {connect} from "react-redux";
import UsersAPIContainer from "./UsersAPIContainer";
import {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching, unfollow, follow

} from "../../../Redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching

    }
}
const UsersContainer = connect(mapStateToProps, {
     unfollow, follow, setUsers, setCurrentPage,
    setTotalUsersCount, toggleIsFetching
})(UsersAPIContainer)
export default UsersContainer;