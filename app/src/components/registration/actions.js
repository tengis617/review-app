import Axios from 'axios'

export const NEXT_PAGE = 'NEXT_PAGE'
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE'

export const SUBMIT_COMPANY_SUCCESS = 'SUBMIT_COMPANY_SUCCESS'
export const SUBMIT_COMPANY_REQUEST = 'SUBMIT_COMPANY_REQUEST'
export const SUBMIT_COMPANY_FAILURE = 'SUBMIT_COMPANY_FAILURE'

export const submitCompanyRequest = () => ({
  type: SUBMIT_COMPANY_REQUEST,
})

export const submitCompanySuccess = (company) => ({
  type: SUBMIT_COMPANY_SUCCESS,
  company
})

export const submitCompanyRegistration = (company) => {
  return async dispatch => {
    dispatch(submitCompanyRequest)
    const { data } = await Axios.post(`http://localhost:8080/company/create`, {
      ...company
    })
    return dispatch(submitCompanySuccess(company))
  }
}