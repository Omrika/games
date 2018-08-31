import { createSelector } from 'reselect';

const hasCards = game => (
  game && game.levels && game.levels.length > 0
)

export const gameSelector = createSelector(
  state => state.game,
  game => (hasCards(game) && game.levels) || []
)

export const levelSelector = createSelector(
  gameSelector,
  levels => {
    const data = {}
    levels.forEach(level => (
      data[level.difficulty] = level.cards.map((card, index) => ({
        id: index,
        symbol: card,
        isActive: false,
        isMatched: false,
      }))
    ))
    return data
  }
)
