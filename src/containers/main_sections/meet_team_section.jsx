import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import s from '../styles/basic.sass';




export default class MeetTeam extends Component {

  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProps = {
  };

  handleEdit = () => {
    const { onHandleEdit } = this.props;
    onHandleEdit();
  };

  render() {
  	const { data, editMode } = this.props;
    return (
      <div className={classNames(s.container, s.top_section_padding)}>
        <h3 className={s.section_title}><img src="../assets/images/team.png" /> Meet the team</h3>

        <div className={classNames(s.flex, s.top_section_padding)}>
          <div className={classNames(s.text_center)}>
            <p><img src="../assets/images/photo.png" /></p>
            <div className={s.margin_top_10}>
              <p>Name</p>
              <p>Position</p>
            </div>
            <div className={classNames(s.flex, s.justify)}>
              <div>img</div>
              <div>img</div>
              <div>img</div>
            </div>
          </div>

        </div>

        {editMode && (
        <p>Edit mode true</p>
                )}
        <button onClick={this.handleEdit}>
                    edit
                </button>
      </div>
    );
  }
}
