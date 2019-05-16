import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../styles/basic.sass';
import bts from '../styles/key_benefits.sass';
import classNames from 'classnames/bind';


export default class Benefits extends Component {

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
      <div>
        <div className={classNames(s.container, s.top_section_padding)}>
          <h3 className={s.section_title}><img src="../assets/images/stats.png" alt="" /> Key Benefits</h3>
          <div className={classNames(s.flex, s.top_section_padding)}>

            {
                      data.content.key_benefits.map((item, index) => (
                        <div className={bts.col4} key={index}>
                          <h3 className={bts.item_title}>{item.title}</h3>
                          {
                                  item.content.map((li, index) => (

                                    <div className={classNames(bts.ul_no_style, s.flex)}>
                                      <div> <img className={bts.img_padding} src={li.img} alt="" /> </div>
                                      <div>{li.text}</div>
                                    </div>
                                  ))
							  }
                        </div>
                      ))

                  }

          </div>
          {editMode && (
            <p>Edit mode true</p>
            )}
          <button onClick={this.handleEdit}>
                edit
            </button>
        </div>
      </div>);
  }
}
