import React from 'react'

import CompanyCard from './CompanyCard'
import { Row, Col } from '../ui'

const CompanyList = ({ companies }) => (
  <Row>
    {companies.map((company, i) => (
      <CompanyCard key={i} company={company} />
    ))}
  </Row>
)

export default CompanyList