import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import AppHandler from './handlers/AppHandler.jsx';
import ExperimentsHandler from './handlers/ExperimentsHandler.jsx';
import ExperimentHandler from './handlers/ExperimentHandler.jsx';
import ExperimentListHandler from './handlers/ExperimentListHandler.jsx';
import ExperimentArchiveHandler from './handlers/ExperimentArchiveHandler.jsx';
import ExperimentTagsHandler from './handlers/ExperimentTagsHandler.jsx';
import ExperimentSearchHandler from './handlers/ExperimentSearchHandler.jsx';
import AboutHandler from "./handlers/AboutHandler";
import TermsHandler from "./handlers/TermsHandler";
import PrivacyHandler from "./handlers/PrivacyHandler";

let routes = (
    <Route handler={AppHandler}>
        <Route name="about" path="/about" handler={AboutHandler}/>
        <Route name="terms" path="/terms" handler={TermsHandler}/>
        <Route name="privacy" path="/privacy" handler={PrivacyHandler}/>
        <Route name="experiments" handler={ExperimentsHandler}>
            <DefaultRoute name="experimentlist" handler={ExperimentListHandler}/>
            <Route name="experimentarchive" path="/" handler={ExperimentArchiveHandler}/>
            <Route name="experimenttags" path="/tags" handler={ExperimentTagsHandler}/>
            <Route name="experiment" path="/:link" handler={ExperimentHandler}/>
            <Route name="search" path="/search/?:query?" handler={ExperimentSearchHandler}/>
        </Route>
    </Route>
);

export default routes;
