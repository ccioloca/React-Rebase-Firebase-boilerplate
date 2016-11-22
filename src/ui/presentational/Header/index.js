import React from 'react'
import Dropdown from '../../containers/Dropdown'
import PublicNavigation from './PublicNavigation'
import Container from '../../layout/Container'

const Header = (props) => {

    const { hasUser, firebaseUser, logout } = props
    const renderNavigation = hasUser ? <Dropdown firebaseUser={firebaseUser} logout={logout}/> : <PublicNavigation />

    return (
        props.loading
        ? null
        : <header className='header'>
            <Container>
              <nav className="header__navigation">
                <div className='header__container'>
                  <div className='header__left'>
                    <div className="header__logo">
                      <svg width="48" height="48">
                        <circle className="header__circle" cx="25" cy="25" r="20" strokeWidth="4" />
                      </svg>
                    </div>
                    <div className="header__brand">
                        Re-base Boilerplate
                    </div>
                    <div className="breadcrumbs">
                      <span className="breadcrumbs__item ">
                        test breadcrumb
                      </span>
                    </div>
                  </div>
                  <div className='header__right'>
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
  hasUser: React.PropTypes.bool,
  firebaseUser: React.PropTypes.object,
  logout: React.PropTypes.func
}
