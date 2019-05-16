import React, { Component } from 'react';
import PropTypes from 'prop-types';


import s from './styles/overlay.sass';

const DIALOGS = {
  signin: 'signin',
  wallets: 'wallets'
};

export default class Overlay extends Component {
  static propTypes = {
    dialog: PropTypes.shape({
      name: PropTypes.string,
    }),
  };

  static defaultProps = {
    dialog: {
      name: '',
    },
  };

  renderDialog() {
    const { dialog } = this.props;
    const { name } = dialog;

    switch (name) {
      case DIALOGS.signin: {
        return (
          <div
            error={dialog.params.error}
          />
        );
      }
      case DIALOGS.wallets: {
        return (
          <div />
        );
      }

      default:
        return null;
    }
  }

  render() {
    const { dialog } = this.props;

    return dialog.name ? (
      <div className={s.overlay_wrapper}>
        {this.renderDialog()}
      </div>
    ) : null;
  }
}

