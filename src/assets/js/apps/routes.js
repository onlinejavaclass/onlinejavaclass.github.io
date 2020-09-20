import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AppHandler from "./blog/handlers/AppHandler";
import AboutHandler from "./blog/handlers/AboutHandler.js";

export default (
    <Switch>
        <Route exact path="/am"
               render={(props) => (
                   <AppHandler/>
               )}/>
        <Route path="/about"
               render={(props) => (
                   <AboutHandler/>
               )}/>
    </Switch>
);
