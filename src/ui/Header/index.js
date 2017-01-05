import React from 'react'
import Dropdown from './Dropdown'
import PublicNavigation from './PublicNavigation'
import Container from '../layout/Container'
import {Link} from 'react-router'

const Header = ({hasUser, isAdmin, displayName, photoURL, loading, language, Text}) => {

    const renderNavigation = hasUser  ? <Dropdown photoURL={photoURL}
                                                  displayName={displayName}
                                                  isAdmin={isAdmin}
                                                  language={language}
                                                  Text={Text} />
                                      : <PublicNavigation language={language}
                                                          Text={Text} />
    const brandLink = hasUser ? 'dashboard' : 'index'
    const headerRightHasUserModifier = hasUser ? 'header__right--has-user' : ''

    return (
      loading
      ? null
      : <header className='header'>
          <Container size={'medium'}>
            <nav className="header__navigation">
              <div className='header__container'>
                <div className='header__left'>
                  <Link to={brandLink}>
                    <div className="header__logo">
                      <svg width="48" height="48">
                        <circle className="header__circle" cx="25" cy="25" r="20" strokeWidth="4" />
                      </svg>
                    </div>
                    <div className="header__brand">
                        {Text[language].brandName}
                    </div>
                  </Link>
                </div>
                <div className={`header__right ${headerRightHasUserModifier}`} >
                  {renderNavigation}
                </div>
              </div>
            </nav>
          </Container>
        </header>
    )
}

export default Header

Header.propTypes = {
  loading: React.PropTypes.bool,
  hasUser: React.PropTypes.bool,
  isAdmin: React.PropTypes.bool,
  displayName: React.PropTypes.string,
  photoURL: React.PropTypes.string,
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired
}
