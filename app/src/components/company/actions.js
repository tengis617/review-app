import Axios from 'axios'
import { push } from 'react-router-redux'

export const REQUEST_COMPANIES = 'REQUEST_COMPANIES'
export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES'
export const REQUEST_COMPANY_INFO = 'REQUEST_COMPANY_INFO'
export const RECEIVE_COMPANY_INFO = 'RECEIVE_COMPANY_INFO'
export const SELECT_COMPANY = 'SELECT_COMPANY'

const requestCompanies = () => {
  return {
    type: REQUEST_COMPANIES,
  }
}

const receiveCompanies = (companies) => {
  return {
    type: RECEIVE_COMPANIES,
    companies,
  }
}

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

export const fetchCompanies = () => {
  return async function (dispatch) {
    dispatch(requestCompanies())
    const { data } = await Axios.get('http://localhost:8080/company/all')
    return dispatch(receiveCompanies(data))
  }
}

export const fetchCompanyInfo = (id) => {
  return async function (dispatch) {
    dispatch(requestCompanyInfo(id))
    const { data } = await Axios.get(`http://localhost:8080/company/${id}`)
    console.log('-------', data)
    return dispatch(receiveCompanyInfo(data))
  }
}