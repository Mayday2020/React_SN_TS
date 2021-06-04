import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <main>
            <div className={s.content_image}>Profile Image</div>
            <div> ava + description</div>
            <MyPosts />
        </main>
    )
}
export default Profile;