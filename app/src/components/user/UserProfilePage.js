import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { Avatar, Card, Header, Row, Label } from '../ui'

export const UserProfilePage = ({ user }) => (
  <div className="container mx-auto">
    <Card>
      <Row>
        <Header size="2xl">My Profile</Header>
      </Row>
      <Row>
        <div className="flex justify-center">
          <Avatar url={user.info.image} /> 
        </div>
      </Row>
      <Row>
        <Label text="email" />
          {user.info.email}
      </Row>
    </Card>
  </div>
)


function mapStateToProps(state) {
  const { user } = state || {
    info: {},
    isAuthenticated
  }
  return {
    user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfilePage))