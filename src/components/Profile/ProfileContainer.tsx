import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile_reducer";
import {toggleIsFetching} from "../../Redux/users_reducer";
import {RootStateType} from "../../Redux/store";

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(ProfileContainer);