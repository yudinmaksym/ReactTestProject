import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import s from './styles/index.sass';

export default class Dialog extends Component {
  static propTypes = {
    title: PropTypes.string,
    acceptText: PropTypes.string,
    children: PropTypes.node,
    onAccept: PropTypes.func,
    buttonAcceptProps: PropTypes.oneOfType([
      PropTypes.object,
    ]),
  };

  static defaultProps = {
    title: '',
    acceptText: '',
    children: [],
    onAccept() {},
    buttonAcceptProps: {},
  };

  render() {
    const { title, children, acceptText, onAccept, buttonAcceptProps } = this.props;

    return (
      <div className={s.dialog_wrapper}>
        {title && <div className={s.title}>{title}</div>}
        {children}
        {acceptText && (
          <div className={s.btns_container} onClick={onAccept}>
            <Button {...buttonAcceptProps}>
              { acceptText }
            </Button>
          </div>
        )}
      </div>
    );
  }
}
