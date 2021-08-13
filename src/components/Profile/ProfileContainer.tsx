import React, {useEffect} from 'react'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile_reducer";
import {toggleIsFetching} from "../../Redux/users_reducer";
import {RootStateType} from "../../Redux/store";
import { RouteComponentProps, withRouter } from 'react-router-dom';

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

/*function ProfileContainer (props: ComponentPropsType){
    useEffect(()=>{
        let userId = props.match.params.userId;
        if(!userId){
        userId = '2';
    }
    props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
            props.toggleIsFetching(false)
            props.setUserProfile(response.data)
        });
    }, [])
    return <div>
        <Profile {...props} profile={props.profile}/>
    </div>
}*/
class ProfileContainer extends React.Component<ComponentPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = '2';
        }
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUserProfile(response.data)
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