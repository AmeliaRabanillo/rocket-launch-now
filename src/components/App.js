import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./home/HomePage";
import {LaunchesList} from "./launchesList/LaunchesList";
import {LaunchDetails} from "./launchDetails/LaunchDetails";


import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/launches" component={LaunchesList} />        
        <Route path="/details/:launchId" component={LaunchDetails} />      
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
