import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { tryLogin } from './actions'

const LoginPage = (props) => (
  <div className="w-full max-w-xs">
    <LoginForm onSubmit={props.handleSubmit}/>
  </div>
)


const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: values => {
      dispatch(tryLogin(values))
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(LoginPage))