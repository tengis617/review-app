import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { graphql, Query } from 'react-apollo'
import gql from 'graphql-tag'

import {
  fetchReviews,
  fetchCompanyInfo
} from './actions'
import ReviewList from '../reviews/ReviewList'
import CompanyInfo from './CompanyInfo'
import { Header } from '../ui'

const queryCompany = gql`query getCompanyById($id: String!) {
    company: getCompanyById(id: $id) {
      id, name, description 
    }
}`

const CompanyPage = ({ data, match }) => (
  <Query query={queryCompany} variables={{ id: match.params.id }}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`
      return (
        <div>
        <div>
          <Header size="4xl">{data.company.name}</Header>
          <div className='h-48 md:h-half-screen lg:h-half-screen flex-content-center flex-none bg-cover text-center overflow-hidden' style={{ backgroundImage: `url(${'https://tailwindcss.com/img/card-left.jpg'})` }}>
          </div>
          <CompanyInfo {...data.company.info} />
        </div>
        <div className='w-full'>
          <ReviewList />
        </div>
        </div>
    )
    }}
  </Query>
        
  )
  
export default CompanyPage