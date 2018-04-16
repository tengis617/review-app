import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loginSuccess } from './actions'

import gql from "graphql-tag"
import { Mutation } from "react-apollo"

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    user:login(email: $email, password: $password) {
      email
      id
      image
      token
    }
  }
`;
const LoginPage = ({ loginSuccess }) => (
  <Mutation mutation={LOGIN}>
  {(login) => (
    <div className="w-full max-w-xs">
      <LoginForm onSubmit={async values => {
        const { email, password } = values
        const { data } = await login({ variables: { email, password }})
        localStorage.setItem('token', data.user.token)
        loginSuccess(data.user)
      }}/>
    </div>
  )}
  </Mutation>
)


const mapDispatchToProps = (dispatch) => ({
    loginSuccess: (user) => dispatch(loginSuccess(user)),
})

export default connect(null, mapDispatchToProps)(LoginPage)