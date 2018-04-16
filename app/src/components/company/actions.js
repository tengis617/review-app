import { push } from 'react-router-redux'

export const navigateToCompanyPage = (id) => {
  return (dispatch) => {
    return dispatch(push(`/companies/${id}`))
  }
}