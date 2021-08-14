import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile_reducer";
import {toggleIsFetching} from "../../Redux/users_reducer";
import {RootStateType} from "../../Redux/store";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {usersAPI} from "../../api/api";

type PathParamsType = {userId: string }
type ComponentPropsType = RouteComponentProps<PathParamsType> & PropsType
type MapDispatchPropsType = {
    setUserProfile: any
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
        this.props.toggleIsFetching(true);
        usersAPI.getUser(userId)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUserProfile(data)
            });
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
export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(WithUrlDataContainerComponent);