import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CompanyCard from './CompanyCard';

import '../../main.css'

const mockCompany = {
  name: 'Starbucks',
  description: 'best coffee in town!',
  rating: '4.5',
  reviews: 201,
  category: 'coffee',
  id: 'coffee1',
  image: 'https://tailwindcss.com/img/card-left.jpg'
}

storiesOf('Company Card', module)
  .add('with data', () => (
    <CompanyCard company={mockCompany} />
  ))