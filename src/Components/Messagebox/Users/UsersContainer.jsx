import Users from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../../Redux/users-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
       users: state.UsersPage.users
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
       unFollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}
const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;