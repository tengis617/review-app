import React from 'react'

import { Header, Card, Button, Row, Col } from '../ui'

export default () => (
  <div className="max-w-md container mx-auto">
    <Card>
      <div>
        <Header size="4xl">Upload some images!</Header>
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
            <Button text="Back" />
          </div>
          </Col>
          <Col size="1/2">
          <div className="text-center p-6">
            <Button text="Next" />
          </div>
          </Col>
        </Row>
      </div>
    </Card>
  </div>
)


const Box = ({ children }) => (
  <div className="cursor-pointer hover:bg-purple hover:text-white w-1/2 p-6 items-stretch text-center flex-1 content-center">
    {children}
  </div>
)