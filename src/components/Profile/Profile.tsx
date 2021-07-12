import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../Redux/store";

export type ProfilePropsType = {
    profilePage: ProfilePageType,
    dispatch: (action: ActionsTypes)=> void
}
const Profile: React.FC<ProfilePropsType> = (props: ProfilePropsType) => {

    return (
        <main>
            <div className={s.content_image}>Profile Image</div>
            <ProfileInfo />
            <MyPosts
                profilePage={props.profilePage}
                dispatch={props.dispatch}/>
        </main>
    )
}
export default Profile;