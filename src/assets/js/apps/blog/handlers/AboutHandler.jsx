import * as React from "react";
import About from "../components/About";

export default class AboutHandler extends React.Component {

    render() {
        return <div className="content">
            <section>
                <About link="/data/footer/about.html"/>
            </section>
        </div>;
    }
}
