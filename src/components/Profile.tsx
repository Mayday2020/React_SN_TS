import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <main className={s.content}>
            <div className={s.content_image}>Image</div>
            <div> ava + description</div>
            <div>
                my posts
                <div>New post</div>
                <div>
                    Posts
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </main>
    )
}
export default Profile;