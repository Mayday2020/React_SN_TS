import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile_reducer";
import {toggleIsFetching} from "../../Redux/users_reducer";
import {ActionUsers, ProfileType, RootStateType} from "../../Redux/store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';

type PathParamsType = {userId: string }
type ComponentPropsType = RouteComponentProps<PathParamsType> & PropsType
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => (dispatch: any) => any
    toggleIsFetching: ActionUsers
}
type MapStatePropsType = {
    profile: ProfileType
    isAuth: boolean
}
type PropsType = MapDispatchPropsType & MapStatePropsType;

export const ProfileContainer = (props: ComponentPropsType) => {
    let userId = props.match.params.userId;
    if(!userId){
        userId = '2';
    }
    props.getUserProfile(userId)

    return <div>
        <Profile profile={props.profile}/>
    </div>
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile, toggleIsFetching})(WithUrlDataContainerComponent);