import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/news/News";
import Musik from "./components/Musik/Musik";
import Settings from "./components/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {setAppThunckCreator} from "./redux/appReducer";
import {compose} from "redux";
import MainPreloader from "./components/common/mainPreloader/mainPreloader";
import Preloader from './components/common/preloader/preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

    componentDidMount() {
        // логинимся в сеть
        this.props.initializeApp();
    }

    render() {
        if (!this.props.isInit) {
            return (
                <div className='preloaderWrapper'>
                    <div className='preloaderTriangle'>
                        <MainPreloader />
                    </div>
                </div>
            );
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div><Preloader /></div>}>
                            <Route path='/dialogs' render={() => <DialogsContainer />}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    </Suspense>                                                                 
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
