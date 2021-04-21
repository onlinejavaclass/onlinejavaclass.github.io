import * as React from "react";
import {Link} from 'react-router';

export default class FooterHandler extends React.Component {

    render() {
        return <footer className="footer-distributed">

            <div className="footer-left">

                <h3>Online<span>Java</span>Class</h3>

                <p className="footer-company-name">&copy;Copyright 2015-2021 All rights reserved.<br/> This blog is
                    fully run by myself and the powerful React framework</p>
            </div>

            <div className="footer-center">
                <div>
                    <Link to="about" activeClassName="active">
                        <i className="fap fap-avatar"/>
                        About Me
                    </Link>
                </div>
                <div>
                    <Link to="privacy" activeClassName="active">
                        <i className="fap fap-privacy"/>
                        <p>Privacy Policy</p>
                    </Link>
                </div>
                <div>
                    <Link to="terms" activeClassName="active">
                        <i className="fap fap-terms"/>
                        <p>Terms of Use</p>
                    </Link>
                </div>
                <div>
                    <i className="fap fap-mail"/>
                    <p><a href="mailto:support@company.com">contact@onlinejavaclass.com</a></p>
                </div>
                <div id="paypal-button-container">
                    <p>
                        If you liked the website I am so happy. I work hard to make it better.
                        You can support me so I can keep this website up and deliver more articles to you.
                    </p>
                </div>
                <br/>
            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>About Online Java Class</span>
                    Online Java Class has many classes in Java for beginners and professionals.
                </p>

                <div className="footer-icons">
                    <a href="https://www.linkedin.com/in/mkarami"><i className="fap fap-linkedin"/></a>
                    <a href="https://github.com/metao1"><i className="fap fap-github"/></a>
                </div>

            </div>

        </footer>;
    }
}
