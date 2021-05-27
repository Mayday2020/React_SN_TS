import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <main className={s.content}>
            <div className={s.content_image}>Image</div>
            <div> ava + description</div>
            <MyPosts />
        </main>
    )
}
export default Profile;