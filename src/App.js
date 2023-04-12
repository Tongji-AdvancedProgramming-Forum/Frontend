import React from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Content, Theme } from '@carbon/react'
//import 'font-awesome/css/font-awesome.css'

import './App.css';
import Posts from './components/posts';
import Profile from './components/profile';
import MyHeader from './components/header';
import LoginPage from './components/login';


function App() {
    // const sharedData = {
    //     data: {
    //         loggedIn: false,
    //         userInfo: {
    //             stuId: "2152955",
    //             stuDisplayName: "2152955-助教-张尧",
    //             hasAvatar: true,
    //             avatar: "https://avatars.githubusercontent.com/u/45115933",
    //         }
    //     },
    // }

    // useEffect(() => {
    //     // 从cookies中恢复已保存的数据
    //     if (localStorage.getItem("loggedIn")) {
    //         const data = Cookies.get('data');
    //         if (data) {
    //             sharedData.data = JSON.parse(data);
    //         }
    //     }
    // })

    return (
        //<AppContext.Provider value={sharedData}>
        <Theme theme="white">
            <MyHeader />
            <Content>
                <Router>
                    <Routes>
                        <Route path="/" exact Component={Posts} />
                        <Route path="/about" Component={Profile} />
                        <Route path="/login" Component={LoginPage} />
                    </Routes>
                </Router>
            </Content>
        </Theme>
        //</AppContext.Provider>
    );
}

export default App;
