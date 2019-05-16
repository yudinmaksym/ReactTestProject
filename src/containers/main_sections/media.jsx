import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import s from '../styles/basic.sass';
import me from '../styles/media.sass';


export default class Media extends Component {
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
        <h3 className={s.section_title}><img src="../assets/images/media.png" alt="" /> Media</h3>

        <div className={classNames(s.flex, s.top_section_padding)}>
          {
                        data.content.media_top.map((item, index) => (
                          <div className={classNames(s.col4, me.item_shadow)} key={index}>
                            <p><img src={item.img} /></p>
                            <p className={s.margin_top_10}>{item.text}</p>
                          </div>
                        ))
                    }
        </div>

        <div className={classNames(s.flex)}>
          {
                        data.content.media_bottom.map((item, index) => (
                          <div className={classNames(s.col4, me.item_shadow)}>
                            <p><img src={item.img} /></p>
                            <p className={s.margin_top_10}>{item.text}</p>
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
    );
  }
}
