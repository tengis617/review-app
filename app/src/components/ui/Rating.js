import React from 'react'
import Rating from 'react-rating'
import 'font-awesome/css/font-awesome.min.css'

export default ({ rating }) => (
    <Rating
      initialRating={rating}
      readonly
      emptySymbol="text-yellow fa fa-star-o fa-lg"
      fullSymbol="text-yellow fa fa-star fa-lg"
     />
)


