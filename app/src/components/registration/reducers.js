import {
  NEXT_PAGE,
  PREVIOUS_PAGE,
} from './actions'

const companyRegistrationForm = (
  state = {
    page: 1
  },
  action
) => {
  switch (action.type) {
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      }
      case PREVIOUS_PAGE: 
        return {
          ...state,
          page: state.page - 1
        }
    default:
      return state
  }
}

export default companyRegistrationForm