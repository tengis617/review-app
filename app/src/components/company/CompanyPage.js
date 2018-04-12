import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetchReviews,
  fetchCompanyInfo
} from './actions'
import ReviewList from '../reviews/ReviewList'
import CompanyInfo from './CompanyInfo'

class CompanyPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(fetchCompanyInfo(id))
  }
  render() {
    const { company } = this.props
    return (
      <div className='flex mb-4 flex-wrap'>
        <div className='w-full'>
          <CompanyInfo {...company.info} />
        </div>
        <div className='w-full'>
          <ReviewList />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { selectedCompany } = state || {
    info: {
      isFetching: true
    },
    reviews: [],
  }
  return {
    company: selectedCompany
  }
}

export default withRouter(connect(mapStateToProps)(CompanyPage))