/*jshint -W018, -W040, -W064, -W083, -W086 */

import 'babel/polyfill';
import FastClick from 'fastclick';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import AppHandler from "./handlers/AppHandler";

export default function (divid) {

    ReactDOM.render(
        <BrowserRouter>
            <AppHandler/>
        </BrowserRouter>

        , document.getElementById(divid));
    registerServiceWorker();
    FastClick.attach(document.body);
}
