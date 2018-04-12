import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import CompanyInfo from './CompanyInfo'

const mockCompany = {
  name: 'Starbucks', 
  description: 'best coffee in town!', 
  reviews: 201,
  category: 'coffee', 
  _id: 'coffee1',
  image: 'https://tailwindcss.com/img/card-left.jpg',
  ratings: {
    overall: '4.5',
    food: '3.7',
    service: '5',
    value: '1',
    atmosphere: '3',
  },
  operation: {
    services: [
      'coffee',
      'cake'
    ],
    price: 0,
    openingHours: '1130-1230',
    address: '201 bakerstreet' 
  }
}

storiesOf('Company Info', module)
  .add('with data', () => (
    <CompanyInfo {...mockCompany} />
  ))