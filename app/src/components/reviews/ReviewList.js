import React from 'react'
import ReviewListItem from './ReviewListItem'

const mockReviews = [
  { title: 'magnificent!', author: 'tengis', rating: '4.2', description: 'its a great place with a great view!'},
  { title:'best food in town!', author: 'tengis', rating: '4.2', description: 'its a great place with a great view!'}
]
const ReviewList = ({ title, rating, description, author }) => (
  <div className='flex flex-col p-4'>
    <div className='font-semibold text-2xl py-4'>Reviews</div>
    {mockReviews.map((r, i) => (<ReviewListItem key={i} {...r} />))}
  </div>
)


export default ReviewList