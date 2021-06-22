import React from "react";
import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import {ProfilePropsType} from "../Profile";

const MyPosts: React.FC<ProfilePropsType> = (props: ProfilePropsType) => {

    let postMessageRef = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        debugger
        if (postMessageRef.current){
            props.addPost(postMessageRef.current.value)
        }
    }
    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.item}>
            <div className={s.newPost}>
                <div>
                    <textarea ref={postMessageRef} ></textarea>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                Posts
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;