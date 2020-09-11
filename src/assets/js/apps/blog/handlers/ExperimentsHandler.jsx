import React from 'react';
import {RouteHandler, Link} from 'react-router';
import {debounce} from './../utils/Timer.js';
import httpRequest from "../utils/HttpRequest";

export default class ExperimentsHandler extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            email: ''
        };

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

    submitEmail = (event) => {
        event.preventDefault();
        const URL = 'https://o91o15qwvf.execute-api.eu-central-1.amazonaws.com/Prod/newsletter?' + this.state.email;
        httpRequest
            .get(URL)
            .exec()
            .then(val => val.body);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
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
            <div className="newsletter">
                <div className="popup">
                        <span>
                            <small>I WON'T SPAM YOU! You will be updated with newest Java classes!</small>
                        </span>
                    <form method="GET" onSubmit={this.submitEmail}>
                        <input type="email" name="email" placeholder="Your Email Please" className="email-form"
                               onChange={this.handleEmailChange} required>
                            <button className="button button1" type="submit">Subscribe
                            </button>
                        </input>
                    </form>
                </div>
            </div>
        </div>;
    }
}

ExperimentsHandler.contextTypes = {
    router: React.PropTypes.func.isRequired,
};
