import React from 'react';
import ReactDOM from 'react-dom';

import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import AppHandler from "./assets/js/apps/blog/handlers/AppHandler";
import AboutHandler from "./assets/js/apps/blog/handlers/AboutHandler";
import registerServiceWorker from "./assets/js/apps/blog/registerServiceWorker";

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={AppHandler}/>
                <Route path="/about" component={AboutHandler}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById("app"));

registerServiceWorker();
