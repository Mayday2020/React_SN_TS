import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile_reducer";
import {toggleIsFetching} from "../../Redux/users_reducer";
import {RootStateType} from "../../Redux/store";
import { RouteComponentProps, withRouter } from 'react-router-dom';

type PathParamsType = {userId: string }
type ComponentPropsType = RouteComponentProps<PathParamsType> & PropsType
type MapDispatchPropsType = {
    getUserProfile: any
    toggleIsFetching: any
}
type MapStatePropsType = {
    profile: any
}
type PropsType = MapDispatchPropsType & MapStatePropsType;

class ProfileContainer extends React.Component<ComponentPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = '2';
        }
        this.props.getUserProfile(userId)
    }
    render (){
        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}
let mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile, toggleIsFetching})(WithUrlDataContainerComponent);