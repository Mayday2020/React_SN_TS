import {connect} from "react-redux";
import {NewUserType, RootStateType} from "../../Redux/store";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../Redux/users_reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

type mapStatePropsType = {
    items: NewUserType[]
    pageSize: number
    totalCount: number
    currentPage: number
}
type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: NewUserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
}
type UsersPropsType = mapStatePropsType & mapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        //alert('server request')
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount / 100)  // делим на 100 т.к. пользователей 13750шт
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount / 100)  // делим на 100 т.к. пользователей 13750шт
        });
    }

    render() {

        return <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      items={this.props.items}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (items: NewUserType[]) => dispatch(setUsersAC(items)),
        setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
        setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)