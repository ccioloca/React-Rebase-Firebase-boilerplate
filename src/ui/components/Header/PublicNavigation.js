import React from 'react'
import { Link } from 'react-router'
import Text from '../translations'

const PublicNavigation = () => {
    return (
      <div className="header__public-links-wrapper">
        <Link className="header__public-link" to="/login">
          {Text.en.login}
        </Link>
      </div>
    )
}

export default PublicNavigation
