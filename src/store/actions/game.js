import { createAction } from 'redux-actions'
import { get } from '../../lib/api'

export const GET_GAME = 'GET_GAME'
export const getGame = createAction(
  GET_GAME,
  async () => {
    const endpoint = 'https://web-code-test-dot-nyt-games-prd.appspot.com/cards.json'
    const response = await get(endpoint)
    return response
  },
)
