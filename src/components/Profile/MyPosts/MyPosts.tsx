import React from "react";
import s from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {
    let postData = [
        { id: 1, message: "Hi, how are you?", likesCount: 30 },
        { id: 2, message: "It's my first post.", likesCount: 17 },
        { id: 3, message: "Please, like this comment))", likesCount: 91 }
    ]
    return (
        <div className={s.item}>
            <div className={s.newPost}>
                <div>
                    <textarea name="newPost" cols={50} rows={3}></textarea></div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                Posts
                <Post id={postData[0].id} message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post id={postData[1].id} message={postData[1].message} likesCount={postData[1].likesCount}/>
                <Post id={postData[2].id} message={postData[2].message} likesCount={postData[2].likesCount}/>
            </div>
        </div>
    )
}
export default MyPosts;