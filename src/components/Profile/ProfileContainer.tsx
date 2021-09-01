import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../Redux/profile_reducer";
import {toggleIsFetching} from "../../Redux/users_reducer";
import {ActionUsers, ProfileType, RootStateType} from "../../Redux/store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {compose, Dispatch} from "redux";

type PathParamsType = {userId: string }
type ComponentPropsType = RouteComponentProps<PathParamsType> & PropsType
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => (dispatch: Dispatch) => void
    getStatus: (userId: string) => (dispatch: Dispatch) => void
    updateStatus: (status: string) => (dispatch: Dispatch) => void
    toggleIsFetching: ActionUsers
}
type MapStatePropsType = {
    profile: ProfileType
    status: string
    isAuth: boolean
}
type PropsType = MapDispatchPropsType & MapStatePropsType;

export const ProfileContainer = (props: ComponentPropsType) => {
    let userId = props.match.params.userId;
    if(!userId){
        userId = '18551';
    }
    props.getUserProfile(userId)
    props.getStatus(userId)
    return <div>
        <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    </div>
}

let mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, toggleIsFetching}),
    withRouter/*,
    withAuthRedirect*/
)(ProfileContainer)