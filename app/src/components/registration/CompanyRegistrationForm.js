import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { 
  NEXT_PAGE, 
  PREVIOUS_PAGE,
  submitCompanyRegistration
} from './actions'
import BasicInformationStep from './BasicInformationStep'
import { Row, Col, Button } from '../ui'
import CategorySelectionStep from './CategorySelectionStep';

const CompanyRegistrationForm = ({ page, onSubmit, nextPage, previousPage }) => (
  <div>
    { page === 1 && <BasicInformationStep onSubmit={nextPage} />}
    { page === 2 && <CategorySelectionStep onSubmit={onSubmit} previousPage={previousPage} />}
  </div>
)

function mapStateToProps(state) {
  const { companyRegistrationForm } = state || {
    page: 1
  }
  return {
    page: companyRegistrationForm.page
  }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: values => dispatch(submitCompanyRegistration(values)),
    nextPage: () => dispatch({ type: NEXT_PAGE }),
    previousPage: () => dispatch({ type: PREVIOUS_PAGE })
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompanyRegistrationForm))