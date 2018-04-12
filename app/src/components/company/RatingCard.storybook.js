import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import RatingCard from './RatingCard'
 
const ratings = {
  overall: '4.5',
  food: '3.7',
  service: '5',
  value: '1',
  atmosphere: '3',
}
storiesOf('Rating Card', module)
  .add('with data', () => (
    <RatingCard {...ratings} />
  ))