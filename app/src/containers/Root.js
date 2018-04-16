import React, { Component } from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import configureStore from '../configureStore'
import Companies from '../components/company/Companies'
import CompanyPage from '../components/company/CompanyPage'
import LoginPage from '../components/login/LoginPage'
import UserProfilePage from '../components/user/UserProfilePage'
import Layout from '../components/layout'
import CompanyRegistrationPage from '../components/registration/CompanyRegistrationPage'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Route exact path="/" component={Companies} />
        <Route path="/companies/:id" component={CompanyPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/profile" component={UserProfilePage} />
        <Route exact path="/register-business" component={CompanyRegistrationPage} />
      </Layout>
    </ConnectedRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root