/*global FB:true*/

import React from 'react';
import moment from 'moment';
import Spinner from './../components/Spinner.jsx';
import {isMobile} from "react-device-detect";

export default class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.getFromStore = this.getFromStore.bind(this);
    }

    componentWillMount() {
        this.AppStore = this.context.flux.getStore('appStore');
        this.getFromStore();
    }

    componentDidMount() {
        this.AppStore.addListener('change', this.getFromStore);
        this.getResource(this.props.link);
        const clipboard = new ClipboardJS('.copy-button');
        clipboard.on('success', function (e) {
            e.clearSelection();
        });
        clipboard.on('error', function (e) {
        });
    }

    componentWillUnmount() {
        this.AppStore.removeListener('change', this.getFromStore);
    }

    getFromStore() {
        this.setState(this.AppStore.getResource(this.props.link));
    }

    getResource(link) {
        let appActions = this.context.flux.getActions('appActions');
        let siteMap = this.AppStore.getSiteMap();
        let resourceDef = siteMap[link];
        if (!resourceDef) {
            return;
        }
        resourceDef.link = link;
        if (typeof window !== 'undefined') {
            window.location.href = "#" + link;
        }
        document.title = this.filter(link);
        appActions.getResource(resourceDef).then(ref => {
            this.setState({
                STORE_MISS: ref.STORE_MISS,
                date: ref.date,
                link: ref.link,
                next: ref.next ? ref.next : undefined,
                pre: ref.pre ? ref.pre : undefined,
                repo: ref.repo ? ref.repo : 'https://github.com/metao1',
                postLink: ref.date,
                src: ref.src,
                tags: ref.tags,
                text: ref.text,
                title: ref.title,
                type: ref.type
            });
        });
    }

    render() {
        let jsx;
        if (this.state.STORE_MISS) {
            jsx = <Spinner/>;
        } else {
            let txt = this.state.text;
            let date = moment(this.state.date).fromNow();
            jsx = <div className="post markdown center-box">
                <div className="operational-btn">
                    <div className="operational-link">
                        <button className="button button1" disabled={!this.state.pre}
                                onClick={() => this.getResource(this.state.pre)}>previous
                        </button>
                        <button className="button button1" disabled={!this.state.next}
                                onClick={() => this.getResource(this.state.next)}>next
                        </button>
                    </div>
                    <div className="operational-link">
                        <span className="navigation-spans">{this.filter(this.state.pre)}</span>
                        <span className="navigation-spans">{this.filter(this.state.next)}</span>
                    </div>
                </div>
                <hr/>
                <div className="date">
                    <span>{date}</span>
                    <a hidden={this.state.repo} id="viewSourceOnGithub" className="btn btn-primary"
                       href={this.state.repo}
                       target="_blank"> <span className="fap fap-github"/>View Source on Github &nbsp;</a>
                </div>
                <div className="markdown" dangerouslySetInnerHTML={{__html:  txt}}/>
            </div>;
        }
        return jsx;
    }

    filter(link) {
        if (!!link) {
            return link.split('-')
                .join(' ')
                .split('/')
                .join(' ')
                .substr(0, link.length > this.checkRightSize() ? this.checkRightSize() : link.length)
                .concat(link.length > this.checkRightSize() ? "..." : "");
        }
        return undefined;
    }

    checkRightSize() {
        return isMobile ? 50 : 60;
    }
}

Item.contextTypes = {
    flux: React.PropTypes.object.isRequired,
};
