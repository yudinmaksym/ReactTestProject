import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './styles/style.sass';
import TimerButton from '../basic/button/index.jsx';
import CountDown from '../countdownTimer/index.jsx';

export default class Timer extends Component {
  handleEditTimer = () => {
    const { onHandleEdit } = this.props;
    onHandleEdit();
  }
  render() {
    const { data, editMode, onHandleEdit } = this.props;
    return (
      <div className={s.col6}>
        <div className={s.right_content}>
          <h3 className={s.title}><strong>{data.content.title}</strong></h3>
          <p className={s.bonus}><strong>bonus details</strong></p>
          <div>
            <CountDown />
          </div>
          <p className={s.rates}>
            <strong>1 CVT = {data.content.countDown.rates}</strong>
          </p>
          <p className={s.eth_p}>
            {data.content.countDown.acceptTitle} <img src={data.content.countDown.acceptLogo} className={s.eth_img} alt='' /> {this.props.data.content.countDown.acceptCrypt}
          </p>
          <TimerButton>Contribute</TimerButton>
          {editMode && (
          <p>Edit mode true</p>
			)}
          <button onClick={this.handleEditTimer}>
			edit
		  </button>
        </div>
      </div>
    );
  }
}
