import React from 'react';
import { Link } from 'react-router';

import Item from '../components/Item.js';

export default class CVHandler extends React.Component {

  render() {
    return <div className="content">
      <section>
        <ul className="menu without-search">
          <li className="item">
           <Link to="cv" >
            <i className="fap fap-cv"></i>
            <div className="text">Text</div>
           </Link>
          </li>
        </ul>

        <Item link="/cv"/>

      </section>
    </div>;

  }

}
