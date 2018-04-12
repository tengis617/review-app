import Axios from 'axios'

export const REQUEST_COMPANIES = 'REQUEST_COMPANIES'
export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES'
export const REQUEST_COMPANY_INFO = 'REQUEST_COMPANY_INFO'
export const RECEIVE_COMPANY_INFO = 'RECEIVE_COMPANY_INFO'

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

const receiveCompanyInfo = (info) => {
  return {
    type: RECEIVE_COMPANY_INFO,
    info
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
    return dispatch(receiveCompanyInfo(data))
  }
}