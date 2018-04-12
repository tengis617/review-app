import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

const UserProfilePage = ({ user }) => (
  <div>
    hello my profile
    {user.info.email}
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