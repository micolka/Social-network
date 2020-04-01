import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from "./components/news/News";
import Musik from "./components/Musik/Musik";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = () => {
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/dialogs'
                           render={() => <DialogsContainer />}/>
                    <Route path='/profile'
                           render={() => <ProfileContainer />}/>
                    <Route path='/news' render={() => <News/> }/>
                    <Route path='/musik' render={() => <Musik />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                </div>

            </div>
    );
};

export default App;
