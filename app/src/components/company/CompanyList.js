import React from 'react'
import { graphql, Query } from 'react-apollo'
import gql from 'graphql-tag'

import CompanyCard from './CompanyCard'
import { Row, Col } from '../ui'

const queryCompanies = gql`query { companies { name, description } }`


const CompanyList = ({ data, loading }) => (
  <Query query={queryCompanies}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
        <Row>
          {data.companies.map((company, i) => (
            <CompanyCard key={i} company={company} />
          ))}
        </Row>
      )
    }}
  </Query>
)


export default CompanyList