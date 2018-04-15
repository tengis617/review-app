import { combineReducers } from 'redux'

import {
  REQUEST_COMPANIES,
  RECEIVE_COMPANIES,
  REQUEST_COMPANY_INFO,
  RECEIVE_COMPANY_INFO,
  SELECT_COMPANY,
} from './actions'

export const selectedCompany = (
  state = {
    name: '',
    id: '',
    imageUrl: '',
    rating: '',
    isFetching: false,
    reviews: [],
    info: {}
  },
  action
) => {
  switch (action.type) {
    case SELECT_COMPANY:
    return {
      ...state,
      ...action.company
    }
    case REQUEST_COMPANY_INFO:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_COMPANY_INFO:
      return {
        ...state,
        isFetching: false,
        ...action.company
      }
    default:
      return state
  }
}