import React from "react";
import s from './MyPosts.module.css';
import Post from "./Posts/Post";

type PostType = {
    id: number,
    message: string,
    likesCount: number
}
type MyPostPropsType = {
    posts: Array<PostType>
}
const MyPosts = (post: MyPostPropsType) => {

    let postsElements = post.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
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