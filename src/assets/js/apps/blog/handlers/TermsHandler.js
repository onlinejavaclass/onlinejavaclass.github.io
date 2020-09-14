import * as React from "react";
import Terms from "../components/Terms.js";
import {Component} from "react";

export default class TermsHandler extends Component {

    render() {
        return <div className="content">
            <section>
                <Terms link="/data/footer/terms.md"/>
            </section>
        </div>;
    }
}
