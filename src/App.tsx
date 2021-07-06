import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {ActionsTypes, RootStateType} from "./Redux/state";


type PropsStateType = {
    state: RootStateType
    dispatch: (action: ActionsTypes)=> void
}
const App: React.FC<PropsStateType> = (props: PropsStateType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper-content">
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Route path={'/dialogs'} render={() =>
                        <Dialogs dialogs={props.state.dialogsPage}
                                 dispatch={props.dispatch}/>}/>
                    <Route path={'/profile'} render={() =>
                        <Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
