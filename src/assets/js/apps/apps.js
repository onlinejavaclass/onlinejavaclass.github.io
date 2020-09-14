import React from 'react';
import ReactDOM from 'react-dom';

import Router, {BrowserRouter} from 'react-router-dom';

import registerServiceWorker from './blog/registerServiceWorker';
import AppHandler from "./blog/handlers/AppHandler.js";
import NavLink from "react-router-dom/modules/NavLink";
import Switch from "react-router-dom";
import AboutHandler from "./blog/handlers/AboutHandler";
import Route from "react-router-dom";

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
                        About
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

ReactDOM.render(routing, document.getElementById("app"));

registerServiceWorker();
