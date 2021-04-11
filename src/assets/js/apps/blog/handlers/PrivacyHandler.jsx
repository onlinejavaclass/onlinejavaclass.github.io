import * as React from "react";
import Privacy from "../components/Privacy";

export default class PrivacyHandler extends React.Component {

    render() {
        return <div className="content">
            <section>
                <Privacy link="/data/footer/privacy.html"/>
            </section>
        </div>;
    }
}
