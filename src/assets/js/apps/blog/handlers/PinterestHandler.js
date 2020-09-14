import React from 'react';
import { Link } from 'react-router';
import Pinterest from '../components/Pinterest.js';

export default class PinterestHandler extends React.Component {

  render() {
    return <div className="content">
      <section>
        <ul className="menu without-search">
          <li className="item">
           <Link to="pinterest" >
            <i className="fap fap-pinterest"/>
            {/*<div className="text">Pinterests</div>*/}
           </Link>
          </li>
        </ul>

        <Pinterest username="allahkarami0627"/>

      </section>
    </div>;
  }

}
