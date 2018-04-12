import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { tryLogout } from '../login/actions'

const Header = ({ isAuthenticated, onLogoutClick }) => (
  <nav className="flex items-center justify-between flex-wrap bg-white p-6">
    <div className="flex items-center flex-no-shrink mr-6">
      <span className="font-semibold text-xl tracking-tight"><Link to="/">review-app</Link></span>
    </div>
    <div>
    <Link to="/register-business"> Register Business </Link>
    </div>
    <div>
      {
        isAuthenticated ? 
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
    <button onClick={() => onLogoutClick()}> Logout </button>
  </div>
)
function mapStateToProps(state) {
  const { user } = state || {
    info: {},
    isAuthenticated: false
  }
  return {
    info: user.info,
    isAuthenticated: user.isAuthenticated
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