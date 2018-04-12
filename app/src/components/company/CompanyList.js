import React from 'react'
import CompanyCard from './CompanyCard'

const CompanyList = ({ companies }) => (
  <div className='flex-1'>
    {companies.map((company, i) => (
      <CompanyCard key={i} company={company} />
    ))}
  </div>
)

export default CompanyList