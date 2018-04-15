import Axios from 'axios'
import { push } from 'react-router-redux'

export const REQUEST_COMPANY_INFO = 'REQUEST_COMPANY_INFO'
export const RECEIVE_COMPANY_INFO = 'RECEIVE_COMPANY_INFO'
export const SELECT_COMPANY = 'SELECT_COMPANY'


const requestCompanyInfo = (id) => {
  return {
    type: REQUEST_COMPANY_INFO,
    id
  }
}

const receiveCompanyInfo = (company) => {
  return {
    type: RECEIVE_COMPANY_INFO,
    company
  }
}

export const selectCompany = (company) => ({
  type: SELECT_COMPANY,
  company
})

export const navigateToCompanyPage = (company) => {
  return async (dispatch) => {
    dispatch(selectCompany(company))
    return dispatch(push(`/companies/${company.id}`))
  }
}


export const fetchCompanyInfo = (id) => {
  return async function (dispatch) {
    dispatch(requestCompanyInfo(id))
    const { data } = await Axios.get(`http://localhost:8080/company/${id}`)
    return dispatch(receiveCompanyInfo(data))
  }
}