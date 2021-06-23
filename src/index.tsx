import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from "./reportWebVitals";

import './index.css';
import App from './App';

import state, {addPost, changeNewText, RootStateType} from "./Redux/state";

export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changeNewText={changeNewText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderTree(state)

reportWebVitals();
