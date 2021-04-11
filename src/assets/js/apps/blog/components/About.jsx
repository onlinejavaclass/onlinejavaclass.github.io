import React from 'react';

export default class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.getFromStore = this.getFromStore.bind(this);
    }

    componentWillMount() {
        this.AppStore = this.context.flux.getStore('appStore');
        this.getFromStore();
    }

    componentDidMount() {
        this.AppStore.addListener('change', this.getFromStore);
        this.getResource(this.props.link);
    }

    componentWillUnmount() {
        this.AppStore.removeListener('change', this.getFromStore);
    }

    getFromStore() {
        this.setState(this.AppStore.getResource(this.props.link));
    }

    getResource(link) {
        let appActions = this.context.flux.getActions('appActions');
        appActions.getResource({src: link, link: link})
            .then(result => {
                if (result && result.text) {
                    this.setState({text: result.text});
                }
            });
    }

    render() {
        if (this.state.STORE_MISS) {
            return <div/>;
        } else {
            return <div className="column">
                <div className="col-md-9">
                    <img alt="me" src="/assets/img/avatar.jpg" className="avatar" loading="lazy"/>
                    <div className="about">
                        <p><b>Hi, I’m Mehrdad, and I run this website.</b></p>

                        <p> I’m a software developer. I worked a lot with Java. since 2006 from version 1.5 to 16 today.
                            I use Java daily.(I know that seems crazy)
                            I still love Java. To be able to know Java I practiced a lot.
                            I have a lot of experience in Java projects (done around 200) combining with Cloud
                            technologies.
                            So the reason why I ran this website is to help people learn it too.
                            I don't want to teach magics in Java. Let's learn Java in the proper way so you also would
                            feel love with it.
                        </p>
                    </div>
                </div>
                <blockquote className="center-box">
                    <p><strong>The goal of this blog is to persist the things I learned so that you
                        don’t have to learn them the hard way (again). I share very deep understanding of Java
                    articles that I wish to help growing a better community.</strong></p>
                </blockquote>
                <div className="below">
                    <p>With this website, I produce:</p>

                    <ul>
                        <li>hands-on tutorials about Java</li>
                        <li>deep-dive tutorials about Spring Boot</li>
                        <li>best practices on complex algorithms and data structure implementations with Java</li>
                        <li>opinion on practices of the Software Craft</li>
                    </ul>
                </div>
                <div className="below center-box">

                    <p>If you’re interested in working with me or have any feedback about my writing, don’t
                        hesitate to contact me.</p>

                    <ul className="footer-social">

                        <li><a target="_blank" title="Follow me on LinkedIn"
                               href="https://www.linkedin.com/in/mkarami"
                               className="follow-linkedin"><i className="fap fap-linkedin"/></a></li>

                        <li><a target="_blank" title="Follow me on GitHub"
                               href="https://github.com/metao1" className="follow-github"><i
                            className="fap fap-github"/></a></li>

                        <li><a target="_blank" title="Drop me an email"
                               href="mailto:contact@onlinejavaclass.com"
                               className="follow-email"><i className="fap fap-mail"/></a></li>

                    </ul>
                </div>
            </div>;
        }
    }
}

About.contextTypes = {
    flux: React.PropTypes.object.isRequired,
};
