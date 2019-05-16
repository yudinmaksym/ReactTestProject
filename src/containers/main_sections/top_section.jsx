import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import RangeSlider from '../../components/Range_slider/index.jsx';
import Timer from '../../components/Timer/index.jsx';
import s from '../styles/basic.sass';
import ts from '../styles/top_section.sass';


export default class TopSection extends Component {

  static propTypes = {
    data: PropTypes.object,
    onHandleEdit: PropTypes.func,
  };


  constructor() {
    super();

    this.state = {
      editModeSlider: false,
      editModeTimer: false,
    };
  }

  handleEditSlider = () => {
    this.setState({ editModeSlider: true });
  }
  handleEditTimer = () => {
    this.setState({ editModeTimer: true });
  }
  render() {
    return (
      <div className={ts.bg_img}>
        <div className={classNames(s.container, s.flex, s.top_section_padding)}>
          <RangeSlider
            data={this.props.data}
            editMode={this.state.editModeSlider}
            onHandleEdit={this.handleEditSlider}
          />
          <Timer
            data={this.props.data}
            editMode={this.state.editModeTimer}
            onHandleEdit={this.handleEditTimer}
          />
        </div>
      </div>
    );
  }
}
