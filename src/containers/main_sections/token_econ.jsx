import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import s from '../styles/basic.sass';
import te from '../styles/token_econ.sass';


export default class TokenEcon extends Component {
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
        <h3 className={s.section_title}><img src="../assets/images/economic.png" alt="" /> Token economics</h3>
        <div>
          <p className={classNames(s.text_center, s.small_margin_top)}>Token distribution</p>
          <p className={classNames(s.text_center, s.small_margin_top)}><img src="../assets/images/distribution.png" /></p>
        </div>
        <div className={s.margin_top}>
          <p className={classNames(s.text_center, s.small_margin_top)}>Price drivers</p>
          <p className={classNames(s.text_center, s.small_margin_top)}><img src="../assets/images/content.png" /></p>
        </div>
        <div className={s.margin_top}>
          <p className={classNames(s.text_center, s.small_margin_top)}>Bonus</p>
          <p className={classNames(s.text_center, s.small_margin_top)}><img src="../assets/images/bonus.png" /></p>
        </div>
        <div className={s.margin_top}>
          <p className={classNames(s.text_center, s.small_margin_top)}>Bounty</p>
          <div className={classNames(s.flex, s.small_margin_top)}>
            <div className={classNames(s.col6, te.padding_top)}>
              {
					data.content.token_eco.map((item, index) => (
  <div className={classNames(s.flex, te.margin_top_list)} key={index}>
    <div className={te.margin_right}><img src={item.disc} /></div>
    <div className={te.list_style}><strong>{item.text}</strong></div>
  </div>
					))
				}
            </div>
            <div className={s.col6}><img src="../assets/images/diagram.png" /></div>
          </div>
        </div>

        <div className={s.margin_top}>
          <p className={classNames(s.text_center, s.small_margin_top)}>Referral Rewards</p>
          <div className={s.flex}>
            <div className={s.col6}>1</div>
            <div className={s.col6}>1</div>
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
