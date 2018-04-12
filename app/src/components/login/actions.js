import Axios from 'axios'
import { push } from 'react-router-redux'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  }
}

const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}
const loginFailure = (message) => {
  return {
    type: LOGIN_FAILURE,
    message,
  }
}

const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST
  }
}
const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}


export const tryLogin = ({ email, password }) => {
  return async function (dispatch) {
    try {
      dispatch(loginRequest())
      const { data } = await Axios.post('http://localhost:8080/auth/login', { email, password})
      dispatch(loginSuccess(data.user))
      localStorage.setItem('access_token', data.access_token)
      return dispatch(push('/'))
    } catch (err) {
      // TODO: Dispatch an alert!
      window.alert(err.message)
      return dispatch(loginFailure(err.message))
    }
  }
}

export const tryLogout = () => {
  return dispatch => {
    dispatch(logoutRequest())
    localStorage.removeItem('access_token')
    return dispatch(logoutSuccess())
  }
}