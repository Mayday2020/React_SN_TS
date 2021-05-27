import React from "react";
import s from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div className={s.item}>
            <div className={s.newPost}>
                <textarea name="newPost" cols={50} rows={3}></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                Posts
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}
export default MyPosts;