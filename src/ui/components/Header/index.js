import React from 'react'
import Dropdown from './Dropdown'
import PublicNavigation from './PublicNavigation'
import Container from '../../layout/Container'
import {Link} from 'react-router'
import Text from './translations'

const Header = ({hasUser, loading}) => {

    const renderNavigation = hasUser ? <Dropdown /> : <PublicNavigation />
    const brandLink = hasUser ? 'dashboard' : 'index'
    const headerRightHasUserModifier = hasUser ? 'header__right--has-user' : null

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
                          {Text.en.brandName}
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
  hasUser: React.PropTypes.bool
}
