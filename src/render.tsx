import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeNewText, RootStateType} from "./Redux/state";

export const renderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changeNewText={changeNewText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
