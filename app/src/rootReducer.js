import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import { selectedCompany, companies } from './components/company/reducers'
import { user } from './components/login/reducers'
import companyRegistrationForm from './components/registration/reducers'

const rootReducer = combineReducers({
  user,
  companyRegistrationForm,
  form: formReducer,
  router: routerReducer
})


export default rootReducer