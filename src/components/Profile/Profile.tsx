import React from "react";
import s from './Profile.module.css';
import MyPosts, {MyPostPropsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile: React.FC<MyPostPropsType> = (props: MyPostPropsType) => {
    return (
        <main>
            <div className={s.content_image}>Profile Image</div>
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </main>
    )
}
export default Profile;