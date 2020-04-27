import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/news/News";
import Musik from "./components/Musik/Musik";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {setAppThunckCreator} from "./redux/appReducer";
import Preloader from "./components/common/preloader/preloader";
import {compose} from "redux";

class App extends React.Component {

    componentDidMount() {
        // логинимся в сеть
        this.props.initializeApp();
    }

    render() {
        if (!this.props.isInit) {
            return "Loading";
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/musik' render={() => <Musik/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
        isInit: state.appData.isInitialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp: setAppThunckCreator})
)(App);
