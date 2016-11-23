import React from 'react'
import { Link } from 'react-router'
import Text from './translations'

const PublicNavigation = () => {
    return (
      <div className="header__public-links-wrapper">
        <Link className="header__public-link" to="/login">
          {Text.en.login}
        </Link>
        <Link className="header__public-link header__public-link--last" to="/register">
          {Text.en.signUp}
        </Link>
      </div>
    )
}

export default PublicNavigation
