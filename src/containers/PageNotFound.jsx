import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './styles/not_found.sass';

export default class PageNotFound extends Component {
  static contextTypes = {
    type: PropTypes.string,
    history: PropTypes.object,
    lang: PropTypes.object,

  };

  render() {
    const { history, lang } = this.context;

    return (
      <div>
        <div className={classNames(s.page_not_found, s.content_container)}>
          <h1 className={s.not_found_title}>
            {lang['Page.Not.Found']}
          </h1>
        </div>
      </div>
    )
  }
}