import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper-content">
                <HeaderContainer/>
                <Navbar/>
                <div className='content'>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/users'} render={() => <UsersContainer />}/>
                    <Route path={'/login'} render={() => <LoginPage />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
