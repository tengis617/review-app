import { combineReducers } from 'redux'

import {
  REQUEST_COMPANIES,
  RECEIVE_COMPANIES,
  REQUEST_COMPANY_INFO,
  RECEIVE_COMPANY_INFO,
} from './actions'

export function companies(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_COMPANIES:
      return Object.assign({}, state, {
        isFetching: true, 
      })
    case RECEIVE_COMPANIES:
      return Object.assign({}, state, {
        isFetching: false, 
        items: action.companies, 
      })
    default:
      return state
  }
}

export const selectedCompany = (
  state = {
    isFetching: false,
    reviews: [],
    info: {}
  },
  action
) => {
  switch (action.type) {
    case REQUEST_COMPANY_INFO:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_COMPANY_INFO:
      return Object.assign({}, state, {
        isFetching: false,
        info: action.info
      })
    default:
      return state
  }
}