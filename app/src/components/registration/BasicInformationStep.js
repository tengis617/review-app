import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Header, Card, Button, Row, Col, InputField } from '../ui'

const BasicInformationStep =  ({ handleSubmit, previousPage }) => (
  <div className="max-w-md container mx-auto">
  <form onSubmit={handleSubmit}>
    <Card>
      <div>
        <Header size="4xl">Basic Information</Header>
      </div>
      <div className="max-w-sm mx-auto">
        <div>
        <Field
              name="name"
              label="company name"
              component={InputField}
              type="text"
            />
        <Field
              name="description"
              label="description"
              component={InputField}
              type="text"
            />
        </div>
      </div>
      <Row>
            <Col size="1/2">
              <div className="text-center p-6">
                <Button text="Back" />
              </div>
            </Col>
            <Col size="1/2">
              <div className="text-center p-6">
                <Button type="submit" text="Next" />
              </div>
            </Col>
          </Row>
    </Card>
    </form>
  </div>
)

export default reduxForm({
  form: 'companyRegistration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(BasicInformationStep)