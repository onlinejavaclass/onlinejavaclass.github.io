import React, {Component} from 'react';
import FooterHandler from "./FooterHandler.js";
import Route, {Link} from 'react-router-dom';
import AboutHandler from "./AboutHandler.js";
import TermsHandler from "./TermsHandler.js";
import PrivacyHandler from "./PrivacyHandler.js";
import ExperimentsHandler from "./ExperimentsHandler.js";
import ExperimentArchiveHandler from "./ExperimentArchiveHandler.js";
import ExperimentTagsHandler from "./ExperimentTagsHandler.js";
import ExperimentHandler from "./ExperimentHandler.js";
import ExperimentSearchHandler from "./ExperimentSearchHandler.js";
import Switch from "react-router-dom";
import Router from "react-router-dom";
import About from "../components/About";

class AppHandler extends Component {

    static async routerWillRunOnClient(state, flux) {
        // gtag('send', 'pageview', state.path);
        // let sitemap = flux.getStore('appStore').getSiteMap();
        // if (Object.getOwnPropertyNames(sitemap).length === 0) {
        //     let appActions = flux.getActions('appActions');
        //     await appActions.getSiteMap();
        //     await appActions.getSearchIndex();
        // }
    }

    render() {
        return (
            <div>
                <div className="top-header">
                    <div className="top-header-wrap-1">
                        <div className="top-header-wrap-2">
                            <div className="top-header-h1 z-depth-1">
                                <span className="top-header-title">bash-3.2$ echo "Online Java Class" | tee $1</span>
                            </div>
                            <a className="face" href="/">
                                <img alt="avatar" className="avatar" src="assets/img/me.png"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="top-menu">
                    <div className="top-menu-wrap-1">
                        <div className="top-menu-wrap-2">
                            <div className="top-menu-wrap-3">
                                <ul className="menu pull-left">
                                    <li className="item">
                                        <Link to="/">
                                            <i className="fap fap-experiments"/>
                                            <div className="text">Articles</div>
                                        </Link>
                                    </li>

                                </ul>
                                <ul className="menu pull-right">
                                    <li className="item">
                                        <a href="mailto:contact@onlinejavaclass.com">
                                            <i className="fap fap-mail"/>
                                            <div className="text">Mail</div>
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a href="https://github.com/metao1" target="_blank">
                                            <i className="fap fap-github"/>
                                            <div className="text">Github</div>
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a href="https://www.linkedin.com/in/allahkarami" target="_blank">
                                            <i className="fap fap-linkedin"/>
                                            <div className="text">LinkedIn</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div><FooterHandler/></div>
            </div>
        );
    }
}

export default AppHandler;
