import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.user_image}>
                AVA
            </div>
            <div>
                <div>Name: Likholetov Dmitry</div>
                <div>Birthday: 22 JAN 1990</div>
                <div>City: Stavropol</div>
                <div>Education:  Mining University, St. Petersburg(RUS)</div>
            </div>
        </div>
    )
}
export default ProfileInfo;