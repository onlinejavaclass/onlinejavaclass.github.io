import React from 'react';
import Item from './../components/Item.jsx';

export default class ExperimentHandler extends React.Component {

    render() {
        return <Item key="0" link={this.context.router.getCurrentPath()} linkClicked={this.linkClicked}/>
    }

    linkClicked(e) {
    }
}

ExperimentHandler.contextTypes = {
    router: React.PropTypes.func.isRequired,
};
