import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} from './actions'

export const user = (
  state = {
    isFetching: false,
    info: {},
    isAuthenticated: localStorage.getItem('access_token') ? true : false
  },
  action
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        info: action.user
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        info: {}
      }
    case LOGOUT_REQUEST:
    default:
      return state
  }
}