import React, {ReactNode} from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/store";
import {Dispatch} from "redux";

type ProfilePropsType = {
    children?: ReactNode
    profile: ProfileType
    status: string
    updateStatus: (status: string) => (dispatch: Dispatch) => void
}
const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <div className={s.content_image}>Profile Image</div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </main>
    )
}
export default Profile;