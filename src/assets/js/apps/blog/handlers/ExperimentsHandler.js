import React, {Component} from 'react';
import {RouteHandler, Link} from 'react-router';
import {debounce} from './../utils/Timer.js';
import Popup from "../components/Popup.js";
import Newsletter from "../components/Newsletter.js";
import cookie from 'react-cookies'
import Datenschutz from "../components/Datenschutz.js";

export default class ExperimentsHandler extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDataSchutzen: cookie.load('showDataSchutzen'),
            showPopup: cookie.load('showPopup'),
            query: '',
        };

        this.closePopup = this.closePopup.bind(this);
        this.closeDataschutzen = this.closeDataschutzen.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.setSearchQuery = this.setSearchQuery.bind(this);
    }

    componentWillMount() {
        let that = this;
        this.handleSearchDebounced = debounce(function () {
            this.handleSearch.apply(that, [this.state.query]);
        }, 500);
    }

    handleChange(event) {
        let query = event.target.value;
        this.setState({query: query});
        this.handleSearchDebounced();
    }

    handleSearch(query) {
        if (query && query.length > 0) {
            this.context.router.transitionTo('/search/' + query);
        }
    }

    setSearchQuery(query) {
        this.setState({query: query});
    }

    closePopup() {
        this.setState({
            showPopup: true
        });
        cookie.save('showPopup', true);
    }

    closeDataschutzen() {
        this.setState({
            showDataSchutzen: true
        });
        cookie.save('showDataSchutzen', true);
    }

    render() {
        return <div className="content">
            <div className="search">
                <div className="search-wrap-1">
                    <input type="text" value={this.state.query} onChange={this.handleChange}
                           placeholder="Search in experiments"/>
                </div>
            </div>

            <section>
                <ul className="menu with-search">
                    <li className="item">
                        <Link to="experimentarchive" >
                            <i className="fap fap-archive"/>
                            <div className="text">Archive</div>
                        </Link>
                    </li>
                    <li className="item">
                        <Link to="experimenttags" >
                            <i className="fap fap-tags"/>
                            <div className="text">Tags</div>
                        </Link>
                    </li>
                </ul>

                <RouteHandler setSearchQuery={this.setSearchQuery}/>

            </section>
            <Newsletter/>
            <Popup
                show={this.state.showPopup}
                text='Newsletter'
                closePopup={this.closePopup}
            />
            <Datenschutz
                show={this.state.showDataSchutzen}
                closePopup={this.closeDataschutzen}
            />
        </div>;
    }
}
