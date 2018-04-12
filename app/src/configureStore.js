import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from './rootReducer'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState, history) {
  const routerMiddlewareWithHistory = routerMiddleware(history)
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      routerMiddlewareWithHistory,
    ),
  )
}