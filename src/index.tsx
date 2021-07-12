import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/redux-store";
import './index.css';
import App from './App';

import {RootStateType} from "./Redux/store";

let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
})
reportWebVitals();
