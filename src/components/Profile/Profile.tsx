import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    let posts = [
        { id: 1, message: "Hi, how are you?", likesCount: 30 },
        { id: 2, message: "It's my first post.", likesCount: 17 },
        { id: 3, message: "Please, like this comment))", likesCount: 91 }
    ]
    return (
        <main>
            <div className={s.content_image}>Profile Image</div>
            <ProfileInfo />
            <MyPosts posts={posts} />
        </main>
    )
}
export default Profile;