import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '../../store'
import Game from '../Game'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Game />
  </Provider>
)

export default App
