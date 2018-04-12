import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { Avatar, Card } from '../ui'

export const UserProfilePage = ({ user }) => (
  <div className="container mx-auto">
    <Card>
      <div className="flex flex-col w-full">
        <div className="flex justify-center">
          <Avatar url={user.info.image} />
        </div>
        <div className="flex justify-center">
          <div className='font-semibold text-4xl p-4'>{user.info.name}</div>
        </div>
        <div className="flex justify-center">
          email: {user.info.email}
        </div>
      </div>
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