import React from "react";
import s from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div className={s.item}>
            <div className={s.newPost}>
                <div>
                    <textarea name="newPost" cols={50} rows={3}></textarea></div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                Posts
                <Post message="Hi, how are you?" likesCount={30}/>
                <Post message="It's my first post." likesCount={17}/>
                <Post message="Please, like this comment))" likesCount={91}/>
            </div>
        </div>
    )
}
export default MyPosts;