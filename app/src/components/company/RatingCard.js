import React from 'react'
import { Card, Rating } from '../ui'

const RatingCard = ({ overall, service, food, value, atmosphere }) => (
  <div>
    <RatingWithLabel rating={overall} label='overall' />
    <RatingWithLabel rating={food} label='food' />
    <RatingWithLabel rating={service} label='service' />
    <RatingWithLabel rating={atmosphere} label='atmosphere' />
    <RatingWithLabel rating={value} label='value' />
  </div>
)

const RatingWithLabel = ({ rating, label }) => (
  <div className="flex items-baseline">
    <div className="text-right m-2">
      <Rating rating={rating} />
    </div>
    <div className=" text-grey-darker text-left m-2">
      <Label>{label}</Label>
    </div>
  </div>
)

const Label = ({ children }) => (
  <span className="block uppercase tracking-wide text-grey-darker text-md font-bold">
    {children}
  </span>
)
export default RatingCard