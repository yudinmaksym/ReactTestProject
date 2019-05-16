import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Navbar from '../../components/navbar/index.jsx';
import ButtonHeader from '../../components/basic/buttonHeader/index.jsx';

import s from '../styles/basic.sass';
import head from '../styles/header.sass';


export default class Header extends Component {

  static propTypes = {
    data: PropTypes.object,
  };
  static defaultProps = {
  };

  render() {
    const { data } = this.props;
    return (
      <div className={head.nav}>
        <div className={classNames(s.container, s.flex, head.just_between)}>
          <a href="#"> <img src="../assets/images/logo.png" alt="" /> </a>
          <div className={s.flex}>
            <Navbar data={data.content.navbar} />
            <ButtonHeader>Log in</ButtonHeader>
          </div>
        </div>
      </div>
    );
  }
}
