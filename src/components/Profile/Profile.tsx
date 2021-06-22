import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../Redux/state";

export type ProfilePropsType = {
    posts: PostType[],
    addPost: (postMessage: string) => void
}
const Profile: React.FC<ProfilePropsType> = (props: ProfilePropsType) => {
    return (
        <main>
            <div className={s.content_image}>Profile Image</div>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </main>
    )
}
export default Profile;