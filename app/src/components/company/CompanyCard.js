import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Tag, Card, Rating } from '../ui'

const CompanyCard = ({ name, description, rating, reviews, category, _id, image }) => (
  <Card image={image}>
    <div className="bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
        <div className="text-black font-bold text-2xl">
          {name}
        </div>
        <div className="py-1">
          <Rating rating={rating}/> <span className="text-sm font-semibold mb-2">{reviews}</span>
        </div>
        <div className="py-1">
          <p className="text-grey-darker text-base">
          {description}
          </p>
        </div>
        <div className="py-1">
          <Tag>{category}</Tag>
        </div>
    </div>
  </Card>
)

CompanyCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.any.isRequired
}
export default CompanyCard