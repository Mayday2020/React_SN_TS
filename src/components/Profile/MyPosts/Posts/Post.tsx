import React from "react";
import s from "./Post.module.css";

type MessageType = {
    id: number,
    message: string,
    likesCount: number
};
const Post: React.FC<MessageType> = (props: MessageType) => {
    return (
        <div className={s.item}>
            <div className={s.user_image}> ava </div>
            <div className={s.user_message}>{props.message}</div>
            <div className={s.likesCount}>{props.likesCount}<a href="#"> Like</a></div>
        </div>
    )
}
export default Post;