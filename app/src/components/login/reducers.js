import {
  LOGIN_SUCCESS
} from './actions'

const user = (
  state = {},
  action
) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.user
      }
    default:
      return state
  }
}

export default user