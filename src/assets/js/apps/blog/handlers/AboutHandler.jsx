import About from "../components/About.js";
import React, {Component} from "react";

class AboutHandler extends Component {

    render() {
        return <div className="content">
            <section>
                <About link="/data/footer/about.md"/>
            </section>
        </div>;
    }
}
export default AboutHandler;
