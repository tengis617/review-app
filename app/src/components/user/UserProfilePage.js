import React from 'react'

import { Avatar, Card, Header, Row, Label } from '../ui'

const UserProfilePage = ({ user }) => (
  <div className="container mx-auto">
    <Card>
      <Row>
        <Header size="2xl">My Profile</Header>
      </Row>
      <Row>
        <div className="flex justify-center">
          <Avatar url={user.image} />
        </div>
      </Row>
      <Row>
        <Label text="email" />
        {user.email}
      </Row>
    </Card>
  </div>
)


export default UserProfilePage