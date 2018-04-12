import React from 'react'
import CompanyCard from './CompanyCard'
import RatingCard from './RatingCard'
import OperationCard from './OperationCard'
import { Header } from '../ui'

const CompanyInfo = ({ name, ratings, operation }) => (
  <div className='w-full overflow-hidden'>
    <div>
     <Header size="3xl">Overview</Header>
      <div className='flex flex-col sm:flex-row flex-wrap'>
        <div className="flex-1 p-4">
        <RatingCard {...ratings}/>
        </div>
        <div className="flex-1 text-center p-2">
        <OperationCard {...operation} />
        </div>
      </div>
    </div>
  </div>
)

export default CompanyInfo