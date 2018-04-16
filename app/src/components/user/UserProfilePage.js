import React from 'react'
import { graphql, Query } from 'react-apollo'
import gql from 'graphql-tag'

import { Avatar, Card, Header, Row, Label } from '../ui'

const GET_USER = gql`query {
  user: currentUser {
    id
    email
    image
  }
}`

const UserProfilePage = () => (
  <Query query={GET_USER}>
    {({ client, loading, data: { user } }) => {
      if (loading) {
        return <p className="navbar-text navbar-right">Loading...</p>;
      }
      if (user) {
        return (<div className="container mx-auto">
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
      </div>)
      }
    }}
    </Query>
  )


export default UserProfilePage