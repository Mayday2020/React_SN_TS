import React from "react";
import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import {ProfilePageType} from "../../../Redux/state";

type MyPostsPropsType = {
    profilePage: ProfilePageType,
    addPost: (postMessage: string) => void
    changeNewText: (newText: string) => void
}
const MyPosts: React.FC<MyPostsPropsType> = (props: MyPostsPropsType) => {

    let addPost = () => {
        props.addPost(props.profilePage.newPostText)
    }
    let postsElements = props.profilePage.posts.map(p => <Post key={p.id}
                                                   id={p.id}
                                                   message={p.message}
                                                   likesCount={p.likesCount}/>)

    return (
        <div className={s.item}>
            <div className={s.newPost}>
                <div>
                    <textarea value={props.profilePage.newPostText}
                    onChange={ (e) => {
                        props.changeNewText(e.currentTarget.value)
                    } }/>
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