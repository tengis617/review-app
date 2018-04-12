import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import { selectedCompany, companies } from './components/company/reducers'
import { user } from './components/login/reducers'

const rootReducer = combineReducers({
  selectedCompany,
  companies,
  user,
  form: formReducer,
  router: routerReducer
})


export default rootReducer