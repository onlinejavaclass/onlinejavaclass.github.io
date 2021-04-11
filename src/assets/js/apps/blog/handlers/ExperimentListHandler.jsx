import React from 'react';
import Item from './../components/Item.jsx';
import InfiniteTracker from './../components/InfiniteTracker.jsx';
import Spinner from './../components/Spinner.jsx';

export default class ExperimentListHandler extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            count: 1,
            noMore: false,
        };

        this.getFromStore = this.getFromStore.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.linkClicked = this.linkClicked.bind(this);

    }

    componentWillMount() {
        this.AppStore = this.context.flux.getStore('appStore');
        this.getFromStore();
    }

    componentDidMount() {
        this.AppStore.addListener('change', this.getFromStore);
    }

    componentWillUnmount() {
        this.AppStore.removeListener('change', this.getFromStore);
    }

    getFromStore() {
        this.setState({posts: this.AppStore.getLastExperiments(this.state.index, this.state.count)});
    }

    loadMore() {
        const newCount = this.state.count + 3;
        const posts = this.AppStore.getLastExperiments(this.state.index, newCount);
        const noMore = posts.length < newCount;
        const newState = {count: posts.length, posts: posts, noMore: noMore};
        this.setState(newState);
    }

    render() {
        let posts = this.state.posts;
        if (posts.STORE_MISS) {
            return <Spinner/>;
        } else {
            return <div>
                <div>{this.props.query}</div>
                {posts.map((p, i) => {
                    let key = 'post' + i;
                    return <Item key={key} link={p.link} pre={p.pre} next={p.next}/>;
                })}
                <InfiniteTracker key="inf0" loadMore={this.loadMore}>
                </InfiniteTracker>

            </div>;
        }
    }
}

ExperimentListHandler.contextTypes = {
    flux: React.PropTypes.object.isRequired,
};
