import {connect} from "react-redux";
import Users from "./Users";
import {ArrayUsersType, RootStateType} from "../../Redux/store";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/users_reducer";

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) =>dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: ArrayUsersType) => dispatch(setUsersAC(users))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer