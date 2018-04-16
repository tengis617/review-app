import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchCompanies } from './actions'
import CompanyList from './CompanyList'

const Companies = ({ companies }) => (
      <div>
        <CompanyList/>
      </div>
)

export default Companies