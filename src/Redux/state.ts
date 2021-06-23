import {renderTree} from "../index";

export type MessageType = {
    id: number
    message: string
}
export type DialogItemType = {
    id: number
    name: string
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
type DialogPageType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
}
type SidebarType = {}

export type RootStateType ={
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}
let state: RootStateType = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 30 },
            { id: 2, message: "It's my first post.", likesCount: 17 },
            { id: 3, message: "Please, like this comment))", likesCount: 91 }
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Bob'},
            {id: 2, name: 'Alex'},
            {id: 3, name: 'Ashley'},
            {id: 4, name: 'Victory'},
            {id: 5, name: 'Helen'}
        ],
        messages: [
            {id: 1, message: 'Is that u, Alex Clare?'},
            {id: 1, message: 'Boooob?! Do somethink!!!'},
            {id: 1, message: 'Not of your business'},
            {id: 1, message: 'Not of your business'},
            {id: 1, message: 'Not of your business'}
        ]
    },
    sidebar: {}
}

export const addPost = () => {
    let newPost: PostType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderTree(state);
}
export const changeNewText:(newText: string)=>void = (newText: string) => {
    state.profilePage.newPostText = newText;
    renderTree(state);
}

export default state