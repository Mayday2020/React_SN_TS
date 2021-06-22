import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/state";

export type ProfilePropsType = {
    profilePage: ProfilePageType,
    addPost: (postMessage: string) => void
    changeNewText: (newText: string) => void
}
const Profile: React.FC<ProfilePropsType> = (props: ProfilePropsType) => {

    return (
        <main>
            <div className={s.content_image}>Profile Image</div>
            <ProfileInfo />
            <MyPosts
                profilePage={props.profilePage}
                addPost={props.addPost}
                changeNewText={props.changeNewText}/>
        </main>
    )
}
export default Profile;