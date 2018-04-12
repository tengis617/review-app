import React from 'react'

const RatingCard = ({ overall, service, food, value, atmosphere }) => (
  <div className='text-left font-semibold'>
    <div>Overall: {overall}</div>
    <div>food: {food}</div>
    <div>service: {service},</div>
    <div>value: {value},</div>
    <div>Atmosphere: {atmosphere}</div>
  </div>
)
export default RatingCard