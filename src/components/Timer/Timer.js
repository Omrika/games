import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const formatTime = time => {
  if (time < 0) return '--:--'
  const h = Math.floor(time / 3600)
  const m = Math.floor((time % 3600) / 60)
  const mm = m < 10 ? `0${m}` : m
  const s = time % 60
  const ss = s < 10 ? `0${s}` : s
  if (h > 0) return [h, mm, ss].join(':')
  return `${m}:${ss}`
}

class TimerContainer extends React.Component {
  static propTypes = {
    time: PropTypes.number,
  }

  state = {
    secondsElapsed: 0,
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000)
  }

  componentDidUpdate() {
    if (!this.props.isTrackingTime) {
      clearInterval(this.interval)
    }
  }

  tick() {
    this.setState({
      secondsElapsed: this.state.secondsElapsed + 1,
    })
  }

  render() {
    const { secondsElapsed } = this.state
    return formatTime(secondsElapsed)
  }
}

export default TimerContainer
