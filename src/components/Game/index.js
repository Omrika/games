import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'
import { getGame, levelSelector } from '../../store'
import Board from './Board'

class Game extends PureComponent {
  componentDidMount() {
    this.props.getGame()
  }

  LEVEL = 'hard'

  render() {
    return <Board cards={this.props.levels[this.LEVEL]} />
  }
}

Game.propTypes = {
  levels: PropTypes.arrayOf(PropTypes.object),
  getGame: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  levels: levelSelector,
})

export default connect(mapStateToProps, { getGame })(Game)
