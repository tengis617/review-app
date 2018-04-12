import React from 'react'
import CompanyCard from './CompanyCard'
import RatingCard from './RatingCard'
import OperationCard from './OperationCard'

const mockRating = {
  overall: '4.5',
  food: '3.7',
  service: '5',
  value: '1',
  atmosphere: 3,
}
const mockOperation = {
  services: [
    'coffee',
    'cake'
  ],
  price: 0,
  openingHours: '1130-1230',
  address: '201 bakerstreet' 
}
const CompanyInfo = ({ name }) => (
  <div className='w-full overflow-hidden'>
    <div className='font-semibold text-4xl p-4'>{name}</div>
    <div className='h-48 md:h-half-screen lg:h-half-screen flex-content-center flex-none bg-cover text-center overflow-hidden' style={{ backgroundImage: `url(${'https://tailwindcss.com/img/card-left.jpg'})` }}>
    </div>
    <div>
      <div className='font-semibold text-2xl p-4'>Overview</div>
      <div className='flex flex-row flex-wrap'>
        <div className="flex-1 p-4">
        <RatingCard {...mockRating}/>
        </div>
        <div className="flex-1 text-center p-2">
        <OperationCard {...mockOperation} />
        </div>
      </div>
    </div>
  </div>
)

export default CompanyInfo