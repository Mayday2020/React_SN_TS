import {connect} from "react-redux";
import {NewUserType, RootStateType} from "../../Redux/store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../Redux/users_reducer";
import React, {useEffect} from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

type mapStatePropsType = {
    items: NewUserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}
type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: NewUserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (spin: boolean) => void
}
type UsersPropsType = mapStatePropsType & mapDispatchPropsType

const UsersContainer = (props: UsersPropsType) => {
    useEffect(()=>{
        props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                props.toggleIsFetching(false)
                props.setUsers(response.data.items)
                props.setTotalUsersCount(response.data.totalCount / 50)  // делим на 50 т.к. пользователей 13750шт
            });
    }, [props.setTotalUsersCount, props.setUsers, props.toggleIsFetching, props.toggleIsFetching, props.currentPage, props.pageSize])
    const onPageChanged = (pageNumber: number) => {
        props.setCurrentPage(pageNumber);
        props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                props.toggleIsFetching(false)
                props.setUsers(response.data.items)
                props.setTotalUsersCount(response.data.totalCount / 50)  // делим на 100 т.к. пользователей 13750шт
            });
    }
    return <>
        {props.isFetching ? <Preloader /> : null}
        <Users totalCount={props.totalCount}
               pageSize={props.pageSize}
               currentPage={props.currentPage}
               onPageChanged={onPageChanged}
               items={props.items}
               follow={props.follow}
               unfollow={props.unfollow}/>
    </>
}

/*class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount / 50)  // делим на 50 т.к. пользователей 13750шт
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount / 50)  // делим на 100 т.к. пользователей 13750шт
            });
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   items={this.props.items}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}/>
        </>
    }
}*/

let mapStateToProps = (state: RootStateType) => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)