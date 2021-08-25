import {connect} from "react-redux";
import {NewUserType, RootStateType} from "../../Redux/store";
import {
    follow,
    getUsers,
    setCurrentPage,
    unfollow
} from "../../Redux/users_reducer";
import React, {useEffect} from "react";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";

type mapStatePropsType = {
    items: NewUserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (page: number) => void
    getUsers: any
}
type UsersPropsType = mapStatePropsType & mapDispatchPropsType

const UsersContainer = (props: UsersPropsType) => {
    useEffect(()=>{
        props.getUsers(props.currentPage, props.pageSize)
    }, [])
    //dep => [props.setTotalUsersCount, props.setUsers, props.toggleIsFetching, props.toggleIsFetching, props.currentPage, props.pageSize]
    const onPageChanged = (pageNumber: number) => {
        props.setCurrentPage(pageNumber);
        props.getUsers(pageNumber, props.pageSize)
    }
    return <>
        {props.isFetching ? <Preloader /> : null}
        <Users totalCount={props.totalCount}
               pageSize={props.pageSize}
               currentPage={props.currentPage}
               onPageChanged={onPageChanged}
               items={props.items}
               follow={props.follow}
               unfollow={props.unfollow}
               followingInProgress={props.followingInProgress}/>
    </>
}
let mapStateToProps = (state: RootStateType) => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default withAuthRedirect(connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers
})(UsersContainer))
