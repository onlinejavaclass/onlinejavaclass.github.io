import 'babel/polyfill';
import FastClick from 'fastclick';
import registerServiceWorker from './registerServiceWorker';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom';
import AppHandler from "./handlers/AppHandler.js";
import AboutHandler from "./handlers/AboutHandler";

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/about">
                        Users
                    </NavLink>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route exact path="/" component={AppHandler} />
                <Route path="/about" component={AboutHandler} />
            </Switch>
        </div>
    </Router>
);
console.log(document.getElementById('app'));
ReactDOM.render(routing, document.getElementById('app'));
FastClick.attach(document.body);
registerServiceWorker();

