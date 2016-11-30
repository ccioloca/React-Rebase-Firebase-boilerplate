import React from 'react'
import { Link } from 'react-router'

const PublicNavigation = ({language, Text}) => {

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
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired
}
