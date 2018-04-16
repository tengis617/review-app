import { push } from 'react-router-redux'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const loginSuccess = (user) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_SUCCESS, user })
    return dispatch(push('/'))
  }
}

export const fetchReviews = () => {
  return async function (dispatch) {
    dispatch(requestReviews())
    const { data } = await Axios.get('http://localhost:8080/reviews/all')
    return dispatch(receiveReviews(data))
  }
}