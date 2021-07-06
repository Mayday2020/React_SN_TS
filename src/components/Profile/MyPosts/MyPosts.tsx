import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import {ActionsTypes, ProfilePageType} from "../../../Redux/state";
import {addPostCreator, updateNewPostCreator} from "../../../Redux/profile_reducer"

type MyPostsPropsType = {
    profilePage: ProfilePageType,
    dispatch: (action: ActionsTypes)=> void
}
const MyPosts: React.FC<MyPostsPropsType> = (props: MyPostsPropsType) => {

    let postsElements = props.profilePage.posts.map(p => <Post key={p.id}
                                                   id={p.id}
                                                   message={p.message}
                                                   likesCount={p.likesCount}/>)
    const addPost = ()=>{
        props.dispatch(addPostCreator(props.profilePage.newPostText))
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostCreator(e.currentTarget.value))
    }

    return (
        <div className={s.item}>
            <div className={s.newPost}>
                <div>
                    <textarea value={props.profilePage.newPostText}
                    onChange={ newTextChangeHandler }/>
                </div>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={s.posts}>
                Posts
                { postsElements }
            </div>
        </div>
    )
}
export default MyPosts;