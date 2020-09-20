import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from "./blog/registerServiceWorker";
import routes from "./routes";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AppHandler from "./blog/handlers/AppHandler";
import AboutHandler from "./blog/handlers/AboutHandler";

ReactDOM.render(<BrowserRouter>
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
</BrowserRouter>, document.getElementById('app'));

registerServiceWorker();
// TODO FastClick.
