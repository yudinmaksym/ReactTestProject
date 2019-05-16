import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import s from './styles/index.sass';

const cx = classNames.bind(s);

/**
 * @example
 * <Button>
 *   Button text
 * </Button>
 *
 * types = {
 *    meditation
 *    event,
 *    floating,
 *    massage,
 *    food,
 *    game$train,
 *    alfagravity
 * }
 */
export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    small: PropTypes.bool,
    type: PropTypes.string,
  };

  static defaultProps = {
    children: '',
    disabled: false,
    onClick() {},
    small: false,
    type: '',
  };

  static contextTypes = {
    type: PropTypes.string,
  };

  render() {
    const { children, disabled, onClick, small } = this.props;
    let type = this.props.type;

    if (!type) {
      type = this.context.type;
    }

    return (
      <button
        tabIndex={1}
        disabled={disabled}
        className={cx('button', { 'small': small }, type)}
        onClick={onClick}
      >
        { children }
      </button>
    );
  }
}
