import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './styles/style.sass'


const zerofill = num => ((num < 10 && num >= 0) ? `0${num}` : num);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline)
  }
  componentDidMount() {
    this.timerId = setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date())
    const seconds = Math.floor(time / 1000 % 60)
    const minutes = Math.floor(time / 1000 / 60 % 60)
    const hours = Math.floor(time / (1000 * 60 * 60) % 24)
    const days = Math.floor(time / (1000 * 60 * 60 * 24))

    this.setState({ days, hours, minutes, seconds })
  }
  render() {
    return (
      <div className={s.clockdiv}>
        <div>
            <span className={s.days}>{this.state.days}</span>
            <div className={s.smalltext}>days</div>
        </div>
        <div>
            <span className={s.days}>{this.state.hours}</span>
            <div className={s.smalltext}>hours</div>
        </div>
        <div>
            <span className={s.days}>{this.state.minutes}</span>
            <div className={s.smalltext}>minutes</div>
        </div>
        <div>
            <span className={s.days}>{this.state.seconds}</span>
            <div className={s.smalltext}>seconds</div>
        </div>
      </div>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deadline: '2018-8-8',
      error: undefined,
      newDeadline: undefined,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({ newDeadline: e.target.value.trim() })
  }
  handleSubmit(e) {
    e.preventDefault()
    if (isNaN(Date.parse(this.state.newDeadline))) {
      this.setState({
        error: "That doesn't seem to be a valid date",
      })
    } else if (Date.parse(this.state.newDeadline) < new Date()) {
      this.setState({ error: 'This date is in the past' })
    } else {
      this.setState({
        deadline: this.state.newDeadline,
        newDeadline: undefined,
        error: undefined,
      })
    }
    
    this.inputRef.value = ''
  }
  formatDate() {
    return new Date(Date.parse(this.state.deadline)).toDateString()
  }
  render() {
    return(
      <div className="app">
        <Clock deadline={this.state.deadline} />
        {
          this.state.error &&
            <div className="message message--error">{this.state.error}</div>
        }
      </div>
    )
  }
}
