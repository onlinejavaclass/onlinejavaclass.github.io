import React from 'react';
import {Link} from 'react-router';
import moment from 'moment';

export default class ItemList extends React.Component {
    render() {
        let items = this.props.src;
        let jsx;

        if (items.length === 0) {
            jsx = <div className="post center-box">No data</div>;
        } else {
            jsx = <div className="post center-box">
                {items.map((it, i) => {
                    let date = it.date ? moment(it.date).fromNow() : '';
                    let title = it.title ? it.title : '';
                    let tags = it.tags ? it.tags : '';
                    let link = it.link.split('/').pop();
                    return <Link to="experiment" params={{link: link}}>
                        <div key={i} className="post itemlist">
                            <div className="date">{date}</div>
                            <Link className="post-title" to="experiment" params={{link: link}}>
                                <span>{title}</span>
                            </Link>
                            <div className="tags center-box">
                                {tags.map((tag, i) => {
                                    return <Link key={tag + i} className="tag" to="search" params={{query: tag}}>
                                        {tag}
                                    </Link>;
                                })}
                            </div>
                        </div>
                    </Link>;
                })}

            </div>;
        }

        return jsx;

    }
}
