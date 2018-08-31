import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardElement = styled.div`
  background-color: ${props => (props.isActive ? 'red' : 'black')};
  opacity: ${props => (props.isMatched ? 0 : 1)}
  border-radius: 4px;
  font-size: 50px;
  height: 100px;
  width: 86px;
  color: white;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`

const CardWrapper = styled.div`
  padding: 16px;
`

const Card = ({ card = {}, onClick = Function.prototype }) => (
  <CardWrapper>
    <CardElement isMatched={card.isMatched} isActive={card.isActive} onClick={() => onClick(card)}>
      {card.isActive && <span>{card.symbol}</span>}
    </CardElement>
  </CardWrapper>
)

Card.propTypes = {
  card: PropTypes.shape({
    symbol: PropTypes.string,
    isActive: PropTypes.bool,
    isMatched: PropTypes.bool,
  }),
  onClick: PropTypes.func,
}

export default Card
