import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import s from '../styles/basic.sass';
import wp from '../styles/white_paper.sass';
import ts from '../styles/top_section.sass';

import WhitepaperButton from '../../components/basic/buttonWhitepaper/index.jsx';


export default class WhitePaper extends Component {
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
      <div className={ts.bg_img_rev}>
        <div className={classNames(s.container, s.top_section_padding)}>
          <h3 className={s.section_title}><img src="../assets/images/video_title.png" /> Whitepaper</h3>

          <div className={wp.margin_top}>
            <div className={s.flex}>
              {
					data.content.white_paper.map((item, index) => (
  <div className={wp.col4} key={index}>
    <p className={wp.text_center}><img src={item.img} /></p>
    <p className={wp.text_center}><WhitepaperButton className={wp.white_paper_button}>download</WhitepaperButton></p>
  </div>
					))
				}
            </div>

            <div className={classNames(s.flex, wp.small_margin_top)}>
              {
                    data.content.white_paper.map((item, index) => (
                      <div className={wp.col4} key={index}>
                        <p className={wp.text_center}><img src={item.img} /></p>
                        <p className={wp.text_center}><WhitepaperButton className={wp.white_paper_button}>download</WhitepaperButton></p>
                      </div>
                    ))
                }
            </div>
          </div>
          {editMode && (
            <p>Edit mode true</p>
            )}
          <button onClick={this.handleEdit}>
                edit
            </button>
        </div>
      </div>
    );
  }
}
