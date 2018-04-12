import React from 'react'
import Rating from 'react-rating'

export default ({ rating }) => (
    <Rating
      initialRating={rating}
      readonly
      emptySymbol="text-yellow far fa-star"
      fullSymbol="text-yellow fas fa-star"
     />
)


