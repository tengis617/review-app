import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Header, Card, Button, Row, Col } from '../ui'

const CategorySelectionStep = ({ handleSubmit, previousPage }) => (
  <form onSubmit={handleSubmit}>
    <div className="max-w-md container mx-auto">
      <Card>
        <div>
          <Header size="4xl">What kind of place are you listing?</Header>
        </div>
        <div className="max-w-sm mx-auto">
          <Row>
            <Box>
              <i className="fas fa-utensils text-2xl" />
              <div>Restaurant</div>
            </Box>
            <Box>
              <i className="fas fa-gamepad text-2xl" />
              <div>Entertainment</div>
            </Box>
          </Row>
          <Row>
            <Box>
              <i className="fas fa-coffee text-2xl" />
              <div>Coffee Shop</div>
            </Box>
            <Box>
              <i className="fas fa-truck text-2xl" />
              <div>Delivery Service</div>
            </Box>
          </Row>
          <Row>
            <Col size="1/2">
              <div className="text-center p-6">
                <Button type="button" handleClick={previousPage} text="Back" />
              </div>
            </Col>
            <Col size="1/2">
              <div className="text-center p-6">
                <Button type="submit" text="Next" />
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  </form>
)


const Box = ({ children, onClick, selected }) => (
  <div onClick={onClick} className={`cursor-pointer hover:bg-purple ${selected ? "bg-purple-light text-white" : "hover:text-white"}  w-1/2 p-6 items-stretch text-center flex-1 content-center`}>
    {children}
  </div>
)

export default reduxForm({
  form: 'companyRegistration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(CategorySelectionStep)