import {MessageType} from "../components/Dialogs/Message/Message";
import {DialogItemType} from "../components/Dialogs/DialogItem/DialogItem";

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type StateType ={
    profilePage: {posts: PostType[]}
    messagesPage: {dialogs: DialogItemType[], messages: MessageType[]}
}
let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 30 },
            { id: 2, message: "It's my first post.", likesCount: 17 },
            { id: 3, message: "Please, like this comment))", likesCount: 91 }
        ]
    },
    messagesPage: {
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
    }
}

export default state