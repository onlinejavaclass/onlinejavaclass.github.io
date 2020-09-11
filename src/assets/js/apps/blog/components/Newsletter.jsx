import React from 'react';
import httpRequest from "../utils/HttpRequest";

export default class Newsletter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subscribed: false,
            email: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    submitEmail = async (event) => {
        event.preventDefault();
        const URL = 'https://o91o15qwvf.execute-api.eu-central-1.amazonaws.com/Prod/newsletter?email=' + this.state.email;
        this.setState({email: ''});
        this.setState({subscribed: true});
        return await httpRequest
            .get(URL)
            .exec()
            .then(val => val.body);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    render() {
        if (this.state.STORE_MISS) {
            return <div/>;
        } else {
            return <div className="newsletter">
                <div className="popup">
                        <span>
                            <small>I WON'T SPAM YOU! You will be updated with newest Java classes if you insert your email here and press subscribe!</small>
                        </span>
                    <form method="GET" onSubmit={this.submitEmail}>
                        <div hidden={!this.state.subscribed}>Thank you!</div>
                        <input type="email" name="email" placeholder="Your Email Please"
                               value={this.state.email} onChange={this.handleEmailChange}
                               hidden={this.state.subscribed} required>
                            <button className="button button1" type="submit" disabled={this.state.subscribed}>Subscribe
                            </button>
                        </input>
                    </form>
                </div>
            </div>;
        }
    }
}

Newsletter.contextTypes = {
    flux: React.PropTypes.object.isRequired,
};
