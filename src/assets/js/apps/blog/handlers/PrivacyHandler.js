import * as React from "react";
import Privacy from "../components/Privacy.js";
import {Component} from "react";

export default class PrivacyHandler extends Component {

    render() {
        return <div className="content">
            <section>
                <Privacy link="/data/footer/privacy.md"/>
            </section>
        </div>;
    }
}
