import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'

export const configureStore = (initialReducers = reducers) => {
  const store = createStore(
    initialReducers,
    composeWithDevTools(applyMiddleware(promiseMiddleware, thunk)),
  )
  return store
}

export default configureStore
