import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import s from '../styles/basic.sass';
import ps from '../styles/problem_solution.sass';
import SolutionButton from '../../components/basic/button/index.jsx';


export default class ProblemSection extends Component {


  static propTypes = {
    data: PropTypes.object,
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
          <h3 className={s.section_title}><img src="../assets/images/checked.png" alt="" /> Problem & Solution</h3>
          <div className={classNames(s.flex, ps.content)}>
            <div className={ps.problem}>
              <h3>Problem</h3>

              <ul>
                {
                      data.content.problem.map((item, index) => (
                        <li key={index}>
                          <p>{item.description}</p>
                        </li>
                      ))
                  }
              </ul>

            </div>
            <div className={ps.solution}>
              <h3>Solution</h3>
              <p>{data.content.description}</p>
              <SolutionButton>Whitepaper</SolutionButton>
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
