import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../styles/basic.sass';
import classNames from 'classnames/bind';



export default class VideoSection extends Component{
	render(){
		return(
			<div>
				<div className={classNames(s.container, s.top_section_padding)}>
					<h3 className={s.section_title}><img src='../assets/images/video_title.png' /> About us</h3>
					<p>video</p>
				</div>
			</div>	
			)
	}
}