import React from "react";
import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import {ActionsTypes, ProfilePageType} from "../../../Redux/state";

type MyPostsPropsType = {
    profilePage: ProfilePageType,
    dispatch: (action: ActionsTypes)=> void
}
const MyPosts: React.FC<MyPostsPropsType> = (props: MyPostsPropsType) => {

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
                        props.dispatch({type: "UPDATE-NEW-POST-TEXT", message: e.currentTarget.value})
                    } }/>
                </div>
                <button onClick={()=>{props.dispatch({type: 'ADD-POST'})}}>Add post</button>
            </div>
            <div className={s.posts}>
                Posts
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;