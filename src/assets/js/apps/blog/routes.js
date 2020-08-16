import React from 'react';
import {Route, DefaultRoute,browserHistory} from 'react-router';
import AppHandler from './handlers/AppHandler.jsx';
import ExperimentsHandler from './handlers/ExperimentsHandler.jsx';
import ExperimentHandler from './handlers/ExperimentHandler.jsx';
import ExperimentListHandler from './handlers/ExperimentListHandler.jsx';
import ExperimentArchiveHandler from './handlers/ExperimentArchiveHandler.jsx';
import ExperimentTagsHandler from './handlers/ExperimentTagsHandler.jsx';
import ExperimentSearchHandler from './handlers/ExperimentSearchHandler.jsx';
import PinterestHandler from "./handlers/PinterestHandler";

let routes = (
    <Route  history={browserHistory} handler={AppHandler}>
        <Route name="experiments" handler={ExperimentsHandler}>
            <DefaultRoute name="experimentlist" handler={ExperimentListHandler}/>
            <Route name="experimentarchive" path="/" handler={ExperimentArchiveHandler}/>
            <Route name="experimenttags" path="/tags" handler={ExperimentTagsHandler}/>
            <Route name="experiment" path="/:link" handler={ExperimentHandler}/>
            <Route name="search" path="/search/?:query?" handler={ExperimentSearchHandler}/>
        </Route>
        <Route name="pinterest" path="/pinterest" handler={PinterestHandler}/>
    </Route>
);

export default routes;
