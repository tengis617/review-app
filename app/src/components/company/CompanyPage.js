import React from 'react'

import ReviewList from '../reviews/ReviewList'
import CompanyInfo from './CompanyInfo'
import { Header, Row, CoverImage } from '../ui'


const CompanyPage = ({ company }) => (
  <div>
    <Row>
      <Header size="4xl">{company.name}</Header>
      <CoverImage image={company.image} />
      <CompanyInfo {...company.info} />
    </Row>
    <Row>
      <ReviewList />
    </Row>
  </div>
)

export default CompanyPage