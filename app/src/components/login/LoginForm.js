import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { InputField, Card, Button, Header } from '../ui'

const LoginForm = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
    <Card>
      <Header>Login</Header>
      <Field
        name="email"
        label="email"
        component={InputField}
        type="email"
      />
      <Field
        name="password"
        label="password"
        component={InputField}
        type="password"
      />
      <Button type="submit" text="Login" />
      </Card>
    </form>
  )

export default reduxForm({
  form: 'login'
})(LoginForm)