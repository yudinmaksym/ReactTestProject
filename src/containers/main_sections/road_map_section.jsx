import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../styles/basic.sass';
import ts from '../styles/top_section.sass';
import classNames from 'classnames/bind';



export default class RoadMap extends Component{
	render(){
		return(
			<div className={ts.bg_img_rev}>
				<div className={classNames(s.container, s.top_section_padding)}>
					<h3 className={s.section_title}><img src='../assets/images/roadmap_title.png' /> Roadmap</h3>
					<div>
						<p className={classNames(s.text_center, s.small_margin_top)}><img src='../assets/images/roadmap.png' /></p>
					</div>
				</div>
			</div>	
			)
	}
}