import React from 'react';
import {Link, RouteHandler} from 'react-router';
import {debounce} from './../utils/Timer.js';
import Popup from "../components/Popup";
import Newsletter from "../components/Newsletter";
import cookie from 'react-cookies'
import Datenschutz from "../components/Datenschutz";

export default class ExperimentsHandler extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDataSchutzen: !!cookie.load('showDataSchutzen'),
            showPopup: !!cookie.load('showPopup'),
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
        this.handleSearchDebounced = debounce(() => {
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
        cookie.save('showPopup', true, {"maxAge": 1872000}); //30 days
    }

    closeDataschutzen() {
        this.setState({
            showDataSchutzen: true
        });
        cookie.save('showDataSchutzen', true, {"maxAge": 1872000}); //30 days
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
                        <Link to="experimentarchive" activeClassName="active">
                            <i className="fap fap-archive"/>
                            <div className="text">Archive</div>
                        </Link>
                    </li>
                    <li className="item">
                        <Link to="experimenttags" activeClassName="active">
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

ExperimentsHandler.contextTypes = {
    router: React.PropTypes.func.isRequired,
};
