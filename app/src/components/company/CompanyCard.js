import React from 'react'
import PropTypes from 'prop-types'
import { withRouter  } from 'react-router-dom'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { navigateToCompanyPage } from './actions'
import { Tag, Card, Rating } from '../ui'

const CompanyCard = ({ company, handleClick }) => (
  <Card image={company.image} onClick={() => handleClick(company.id)}>
    <div className="bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
        <div className="text-black font-bold text-2xl">
          {company.name}
        </div>
        <div className="py-1">
          <Rating rating={company.rating}/> <span className="text-sm font-semibold mb-2">{company.reviews}</span>
        </div>
        <div className="py-1">
          <p className="text-grey-darker text-base">
          {company.description}
          </p>
        </div>
        <div className="py-1">
          <Tag>{company.category}</Tag>
        </div>
    </div>
  </Card>
)

CompanyCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.any.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: id => dispatch(push(`/companies/${id}`))
  }
}
export default withRouter(connect(null, mapDispatchToProps)(CompanyCard))