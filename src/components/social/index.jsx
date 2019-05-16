import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './styles/style.sass';


export default class Social extends Component {

  render() {
    return (
      <ul className={s.social_links}>
        {
              this.props.data.map((item, index) => (
              <li key={index} className={s.lionmiddle}>
                <a href={item.link}>
                  <img src={item.img} className={s.linotonmiddle} alt="" />
                </a>
              </li>
		    ))
	    }
      </ul>
    );
  }
	}
