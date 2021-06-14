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

const App = (props: any) => {
    return (

        <BrowserRouter>
            <div className="app-wrapper-content">
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Route path={'/dialogs'} render={ () => <Dialogs />} />
                    <Route path={'/profile'} render={ () => <Profile />} />
                    <Route path={'/news'} render={ () => <News />} />
                    <Route path={'/settings'} render={ () => <Settings />} />
                    <Route path={'/music'} render={ () => <Music />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
