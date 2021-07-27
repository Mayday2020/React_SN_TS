import {connect} from "react-redux";
import Users from "./Users";
import {NewUserType, RootStateType} from "../../Redux/store";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/users_reducer";

let mapStateToProps = (state: RootStateType) => {
    return {
        items: state.usersPage.items
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (items: NewUserType[]) => dispatch(setUsersAC(items))
    }
}
//@ts-ignore
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer