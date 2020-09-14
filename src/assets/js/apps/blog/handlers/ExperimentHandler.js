import React, {Component} from 'react';
import Item from '../components/Item.js';

export default class ExperimentHandler extends Component {

    render() {
        return <Item key="0" link={this.context.router.getCurrentPath()} linkClicked={this.linkClicked}/>
    }

    linkClicked(e) {
    }
}
