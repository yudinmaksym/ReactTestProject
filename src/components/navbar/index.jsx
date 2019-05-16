import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './styles/style.sass';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul className={s.navbar}>
          {
			this.props.data.map((item, index) => (
			  <li key={index} className={s.lionmiddle}>
				<a href="#">
				  {item.title}
				</a>
			  </li>
			 ))
			}
        </ul>
      </div>
    );
  }
}
