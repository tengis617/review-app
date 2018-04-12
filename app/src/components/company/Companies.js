import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchCompanies } from './actions'
import CompanyList from './CompanyList'

class Companies extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCompanies())
  }
  render() {
    const { companies } = this.props
    return (
      <div className='flex flex-wrap'>
        <CompanyList companies={companies.items} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { companies } = state || {
    items: [],
    isFetching: true
  }
  return {
    companies
  }
}

export default withRouter(connect(mapStateToProps)(Companies))