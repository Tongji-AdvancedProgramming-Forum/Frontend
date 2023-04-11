import React from 'react-dom';
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Posts from './components/posts';
import Profile from './components/profile';
import MyHeader from './components/header';
import { Content, Theme } from '@carbon/react'

// function App() {
//  return (
//   );
// }

class App extends Component {
  render() {
    return (
      <>
        <Theme theme="white">
          <MyHeader />
          <Content>
            <Router>
              <Routes>
                <Route path="/" exact Component={Posts} />
                <Route path="/about" Component={Profile} />
              </Routes>
            </Router>
          </Content>
        </Theme >
      </>
    );
  }
}

export default App;
