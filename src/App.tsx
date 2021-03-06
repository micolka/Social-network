import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/news/News";
import Musik from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, withRouter, Redirect } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { connect } from "react-redux";
import { setAppThunckCreator } from "./redux/appReducer";
import { compose } from "redux";
import MainPreloader from "./components/common/mainPreloader/mainPreloader";
import Preloader from './components/common/preloader/preloader';
import { AppStateType } from './redux/reduxStore';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = {
    initializeApp: () => void
};
type OwnPropsType ={};

class App extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {

    cathAllUnhandledErrors = () => {
        console.log("Some error ocured");
    }

    componentDidMount() {
        // логинимся в сеть
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.cathAllUnhandledErrors);
    }

    componentWillMount() {
        window.removeEventListener("unhandledrejection", this.cathAllUnhandledErrors);
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
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div><Preloader /></div>}>
                        <Route path='/dialogs' render={() => <DialogsContainer />} />
                        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                        <Route exact path='/' render={() => <Redirect to={"/profile"} />} />
                    </Suspense>
                    <Route path='/news' render={() => <News />} />
                    <Route path='/musik' render={() => <Musik />} />
                    <Route path='/settings' render={() => <Settings />} />
                    <Route path='/users' render={() => <UsersContainer />} />
                    <Route path='/login' render={() => <LoginContainer />} />
                    {/* <Route path='*' render={() => <div>404 NOT FOUND</div>}/> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isInit: state.appData.isInitialized
});

export default compose<React.ComponentType>(
    withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, 
        { initializeApp: setAppThunckCreator })
)(App);
