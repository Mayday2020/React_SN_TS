
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
type ProfilePageType = {
    posts: PostType[]
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
        ]
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

export const addPost:(postText: string)=>void = (postText: string) => {
    let newPost: PostType = {
        id: new Date().getTime(),
        message: postText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
}
export default state