import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './styles/style.sass';
import classNames from 'classnames/bind';
import Social from '../social/index.jsx';

export default class RangeSlider extends Component {

  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProps = {
  };

  handleEditSlider = () => {
    const { onHandleEdit } = this.props;
    onHandleEdit();
  };

  render() {
  	const { data, editMode } = this.props;
    return (
      <div className={s.col6}>
        <div className={s.content}>

          <h1 className={s.title}>{data.content.title}</h1>
          <p className={s.description}>{data.content.description}</p>

          <div className={classNames(s.flex, s.margin)}>
            <div className={s.sold}>
              <p>Sold:</p>
              <p>{data.content.sold}</p>
            </div>
            <div className={s.available}>
              <p>Available:</p>
              <p>{data.content.available}</p>
            </div>
          </div>

          <div className={s.rangemain}>
            <div className={s.rangeinside}>

              <div className={s.leftcircle}>
                <div className={s.circle} />
                <span>Dec, 21</span>
              </div>

              <div className={s.rightcircle}>
                <div className={s.circle} />
                <span>Jan, 21</span>
              </div>

            </div>
          </div>

          <div>
            <Social data={data.content.socials} />
          </div>

            {editMode && (
                <p>Edit mode true</p>
            )}
            <button onClick={this.handleEditSlider}>
                edit
            </button>
        </div>
      </div>
    );
  }
}
