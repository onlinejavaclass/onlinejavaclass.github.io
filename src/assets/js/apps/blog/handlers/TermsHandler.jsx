import * as React from "react";
import Terms from "../components/Terms";

export default class TermsHandler extends React.Component {

    render() {
        return <div className="content">
            <section>
                <Terms link="/data/footer/terms.html"/>
            </section>
        </div>;
    }
}
