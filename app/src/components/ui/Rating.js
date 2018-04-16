import React from 'react'
import Rating from 'react-rating'
import PropTypes from 'prop-types'

import '@fortawesome/fontawesome'
import '@fortawesome/fontawesome-free-regular'
import '@fortawesome/fontawesome-free-solid'

const CompanyRating = ({ rating }) => (
  <Rating
    initialRating={rating}
    readonly
    emptySymbol="text-yellow far fa-star"
    fullSymbol="text-yellow fas fa-star"
  />
)
CompanyRating.propTypes = {
  rating: PropTypes.number.isRequired
}

export default CompanyRating


