import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './styles/index.sass';


/**
 * @example
 * <Fieldset
 *   type="text"
 *   label="Inputs label"
 * />
 *
 */
export default class Fieldset extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
  };

  render() {
    const { label, type, placeholder } = this.props;

    return (
      <fieldset className={s.form__group}>
        {label && (
          <label>{label}:</label>
        )}
        <input
          type={type}
          className={s.form__control}
          placeholder={placeholder}
        />
      </fieldset>
    );
  }
}
