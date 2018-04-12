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
import { Header } from '../ui'

class CompanyPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(fetchCompanyInfo(id))
  }
  render() {
    const { company } = this.props
    return (
      <div>
        <div>
          <Header size="4xl">{company.name}</Header>
          <div className='h-48 md:h-half-screen lg:h-half-screen flex-content-center flex-none bg-cover text-center overflow-hidden' style={{ backgroundImage: `url(${'https://tailwindcss.com/img/card-left.jpg'})` }}>
        </div>
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