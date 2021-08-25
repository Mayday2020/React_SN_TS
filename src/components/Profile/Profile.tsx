import React, {ReactNode} from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/store";

type ProfilePropsType = {
    children?: ReactNode
    profile: ProfileType
}
const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <div className={s.content_image}>Profile Image</div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </main>
    )
}
export default Profile;