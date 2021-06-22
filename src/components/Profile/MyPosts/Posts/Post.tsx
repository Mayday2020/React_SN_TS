import React from "react";
import s from "./Post.module.css";
import {PostType} from "../../../../Redux/state";


const Post: React.FC<PostType> = (props: PostType) => {
    return (
        <div className={s.item}>
            <div className={s.user_image}> ava </div>
            <div className={s.user_message}>{props.message}</div>
            <div className={s.likesCount}>{props.likesCount}<a href="#"> Like</a></div>
        </div>
    )
}
export default Post;