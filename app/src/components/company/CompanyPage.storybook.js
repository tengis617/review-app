import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import '../../main.css'
import CompanyPage from './CompanyPage'

const mockCompany = {
  name: 'Starbucks',
  description: 'best coffee in town!',
  rating: '4.5',
  reviews: 201,
  category: 'coffee',
  id: 'coffee1',
  image: 'https://fortunedotcom.files.wordpress.com/2018/04/starbucks-apologizes-arrest.jpg'
}

storiesOf('Company Page', module)
  .add('with data', () => (
    <CompanyPage company={mockCompany} />
  ))