import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './styles/index.sass';

export default class NotFound extends Component {
  static contextTypes = {
    type: PropTypes.string,
  };

  static propTypes = {
    type: PropTypes.string,
  };

  static defaultProps = {
    type: '',
  };

  render() {
    let type = this.props.type;
    if (!type) {
      type = this.context.type;
    }
    return (
      <div className={classNames(s.not_found, s[`${type}`])}>
        <h1>404</h1>
      </div>
    );
  }
};
