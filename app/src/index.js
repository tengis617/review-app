import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import Root from './containers/Root'
import configureStore from './configureStore'
import { initiateState } from './startup'
import './main.css'
import '@fortawesome/fontawesome'
import '@fortawesome/fontawesome-free-regular'
import '@fortawesome/fontawesome-free-solid'

if (module.hot) {
  module.hot.dispose(function () {
    // module is about to be replaced
  });
module.hot.accept(function () {
    // module or one of its dependencies was just updated
  });
}

const history = createHistory()

// const preloadedState = initiateState()
const store = configureStore({}, history)

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('app')
)

