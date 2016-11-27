import React from 'react'
import { Link } from 'react-router'
import Text from '../translations'

const PublicNavigation = ({language}) => {
    return (
      <div className="header__public-links-wrapper">
        <Link className="header__public-link" to="/login">
          {Text[language].login}
        </Link>
      </div>
    )
}

export default PublicNavigation

PublicNavigation.propTypes = {
  language: React.PropTypes.string
}
