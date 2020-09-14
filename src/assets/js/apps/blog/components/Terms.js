import React, {Component} from 'react';
import marked from '@onlinejavaclass/marked';

export default class Terms extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.getFromStore = this.getFromStore.bind(this);
    }

    componentWillMount() {
        //this.getFromStore();
    }

    componentDidMount() {
       // this.AppStore.addListener('change', this.getFromStore);
        this.getResource(this.props.link);
    }

    componentWillUnmount() {
        // this.AppStore.removeListener('change', this.getFromStore);
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
            let txt = marked(this.state.text);
            return <div className="markdown" dangerouslySetInnerHTML={{__html: txt}}/>;
        }
    }

}
