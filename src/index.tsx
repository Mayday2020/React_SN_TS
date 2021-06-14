import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "./components/Dialogs/Message/Message";

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type StateType ={
    posts: PostType[]
    dialogs: {users: DialogItemType[], messages: MessageType[]}
}
let state = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 30 },
        { id: 2, message: "It's my first post.", likesCount: 17 },
        { id: 3, message: "Please, like this comment))", likesCount: 91 }
    ],
    dialogs: {
        users: [
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
ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
