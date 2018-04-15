import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchCompanies } from './actions'
import CompanyList from './CompanyList'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


const client = new ApolloClient({
  uri: 'http://localhost:8080/company',
  link: new HttpLink({ uri: 'http://localhost:8080/company' }),
  cache: new InMemoryCache()
})

const Companies = ({ companies }) => (
      <ApolloProvider client={client} >
      <div>
        <CompanyList/>
      </div>
      </ApolloProvider>
)

export default Companies