import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopSection from './main_sections/top_section.jsx';
import Header from './header/index.jsx';
import VideoSection from './main_sections/video_section.jsx';
import ProblemSolution from './main_sections/problem_solution_section.jsx';
import Benefits from './main_sections/key_benefits.jsx';
import WhitePaper from './main_sections/white_paper_section.jsx';
import TokenEcon from './main_sections/token_econ.jsx';
import RoadMap from './main_sections/road_map_section.jsx';
import Media from './main_sections/media.jsx';
import MeetTeam from './main_sections/meet_team_section.jsx';
import {
  topSectionDefault,
  INITIAL_STATE,
} from '../constants/initial_state.js';
// import {
//   LogoMenuIcon,
//   MeditationIcon,
//   EventsIcon,
//   FloatingIcon,
//   MassageIcon,
//   FoodIcon,
//   GameTrainIcon,
//   AlfaGravityIcon,
// } from '../components/svg';
// import setHeaderTags from '../utils/set_header_tags';
import s from './styles/basic.sass';

export default class Main extends Component {

  constructor() {
    super();

    this.state = {
      editModeProblem: false,
      editModeBenefits: false,
      editModeWhitepaper: false,
      editModeTokeneco: false,
      editModeMedia: false,
      editModeTeam: false,
    };
  }

  handleEditProblem = () => {
    this.setState({ editModeProblem: true });
  }
  handleEditBenefits = () => {
    this.setState({ editModeBenefits: true });
  }
  handleEditWhitepaper = () => {
    this.setState({ editModeWhitepaper: true });
  }
  handleEditTokeneco = () => {
    this.setState({ editModeTokeneco: true });
  }
  handleEditMedia = () => {
    this.setState({ editModeMedia: true });
  }
  handleEditTeam = () => {
    this.setState({ editModeTeam: true });
  }

  render() {
    return (
      <div className={s.main_wrapper}>
        <Header data={topSectionDefault} />
        <TopSection data={topSectionDefault} />
        <VideoSection />
        <ProblemSolution
          data={topSectionDefault}
          editMode={this.state.editModeProblem}
          onHandleEdit={this.handleEditProblem}
        />
        <Benefits
          data={topSectionDefault}
          editMode={this.state.editModeBenefits}
          onHandleEdit={this.handleEditBenefits}
        />
        <WhitePaper
          data={topSectionDefault}
          editMode={this.state.editModeWhitepaper}
          onHandleEdit={this.handleEditWhitepaper}
        />
        <TokenEcon
          data={topSectionDefault}
          editMode={this.state.editModeTokeneco}
          onHandleEdit={this.handleEditTokeneco}
        />
        <RoadMap
          data={topSectionDefault}
        />
        <Media
          data={topSectionDefault}
          editMode={this.state.editModeMedia}
          onHandleEdit={this.handleEditMedia}
        />
        <MeetTeam
          data={topSectionDefault}
          editMode={this.state.editModeTeam}
          onHandleEdit={this.handleEditTeam}
        />
      </div>
    );
  }
}
