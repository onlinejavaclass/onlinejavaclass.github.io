import * as React from "react";

export default class Datenschutz extends React.Component {

    render() {
        return <div className="consent_blackbar" hidden={this.props.show}>
            <div className="consent-track">
                <div className="consent-content">
                    <div className="consent-text messageColumn">We use cookies to improve your experience with the site.
                        To find out more, you can read the full Privacy and Cookie Policy&nbsp;&nbsp;&nbsp;
                        <a href="https://onlinejavaclass.com/#/privacy" target="_blank"
                           id="privacy-button">Privacy and Data Processing Policy</a>
                    </div>
                    <div className="buttonsColumn consent-buttons">
                        <span className="repop-msg"/>
                        <button className="button button1" onClick={this.props.closePopup}>OK</button>
                    </div>
                </div>
            </div>
        </div>
    }
}
