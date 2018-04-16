import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { tryLogout } from '../login/actions'
import { Button } from '../ui'

const Header = ({ user, onLogoutClick }) => (
  <nav className="flex items-center justify-between flex-wrap bg-white p-6">
    <div className="flex items-center flex-no-shrink mr-6">
      <span className="font-semibold text-xl tracking-tight"><Link to="/">review-app</Link></span>
    </div>
    <div>
    <Link to="/register-business"> Register Business </Link>
    </div>
    <div>
      {
        user.email ? 
        <AuthenticatedNav onLogoutClick={onLogoutClick} /> 
        : 
        <Link to="/login"> Login </Link>
      }
    </div>
  </nav>
)

const AuthenticatedNav = ({ onLogoutClick }) => (
  <div>
    <Link to="/profile"> Profile </Link>
    <Button 
      handleClick={onLogoutClick}
      text="Logout"
    />
  </div>
)
function mapStateToProps(state) {
  const { user } = state || {}
  return {
    user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutClick: values => {
      dispatch(tryLogout())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))