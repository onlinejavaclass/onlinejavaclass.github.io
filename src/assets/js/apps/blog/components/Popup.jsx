import React from 'react';
import Newsletter from "./Newsletter";

export default class Popup extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className='main-popup' hidden={this.props.show}>
            <div className='popup'>
                <h1>{this.props.text}</h1>
                <Newsletter/>
                <button className="button button1" onClick={this.props.closePopup}>close me</button>
            </div>
        </div>;
    }
}

Popup.contextTypes = {
    flux: React.PropTypes.object.isRequired,
};
