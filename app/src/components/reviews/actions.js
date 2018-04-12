import Axios from 'axios'

export const REQUEST_REVIEWS = 'REQUEST_REVIEWS'
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'

const requestReviews = () => {
  return {
    type: REQUEST_REVIEWS,
  }
}

const receiveReviews = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews,
  }
}

export const fetchReviews = () => {
  return async function (dispatch) {
    dispatch(requestReviews())
    const { data } = await Axios.get('http://localhost:8080/reviews/all')
    return dispatch(receiveReviews(data))
  }
}