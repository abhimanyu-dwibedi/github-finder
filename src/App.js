import { Fragment } from "react";
import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/users/Users";

import Search from "./components/users/Search";
import { Alert } from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import {} from "react/cjs/react.development";
import GithubState from "./context/github/GithubState";
import { Home } from "./components/pages/Home";
import { Notfound } from "./components/pages/Notfound";
const App = () => {
  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar />

          <div className='container'>
            <Alert />
            {/* from here we are starting the routing part */}
            <Switch>
              {/* route 1:for home page  */}
              <Route exact path='/' component={Home} />
              {/* routing 2:for about page */}
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};
export default App;
