import React from "react";
import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import {PostType} from "../../../Redux/state";

export type MyPostPropsType = {
    posts: Array<PostType>
}
const MyPosts: React.FC<MyPostPropsType> = (posts: MyPostPropsType) => {

    let postsElements = posts.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.item}>
            <div className={s.newPost}>
                <div>
                    <textarea name="newPost" cols={50} rows={3}></textarea></div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                Posts
                { postsElements }
            </div>
        </div>
    )
}
export default MyPosts;