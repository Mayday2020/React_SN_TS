import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Posts/Post";

type MyPostsPropsType = {
    addPosts: ()=> void
    postsElements: PostsElements[]
    newPostText: string
    onPostChange: (text: string)=> void
}
type PostsElements = {
    id: number
    message: string
    likesCount: number
}
const MyPosts: React.FC<MyPostsPropsType> = (props: MyPostsPropsType) => {
    let postsElements = props.postsElements.map(p => <Post key={p.id}
                                                   id={p.id}
                                                   message={p.message}
                                                   likesCount={p.likesCount}/>)
    const addPost = ()=>{
        props.addPosts()
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onPostChange(text)
    }

    return (
        <div className={s.item}>
            <div className={s.newPost}>
                <div>
                    <textarea className={s.myPostTextarea}
                              value={props.newPostText}
                              placeholder={'Enter your post'}
                    onChange={ newTextChangeHandler }/>
                </div>
                <div>
                    <button className={s.buttonAddPost} onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                Posts
                { postsElements }
            </div>
        </div>
    )
}
export default MyPosts;