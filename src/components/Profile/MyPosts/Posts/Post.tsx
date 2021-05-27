import React from "react";
import s from "./Post.module.css";

const Post = () => {
    return (
        <div className={s.item}>
            <div className={s.user_image}> ava </div>
            <div className={s.user_message}>post 1</div>
            <div><a href="#">Like</a></div>
        </div>
    )
}
export default Post;