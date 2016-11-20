import React from 'react'
import { Link } from 'react-router'

const PublicNavigation = () => {
    return (
      <div className="header__public-links-wrapper">
        <Link className="header__public-link" to="/login">
          Login
        </Link>
        <Link className="header__public-link header__public-link--last" to="/register">
          Signup
        </Link>
      </div>
    )
}

export default PublicNavigation
