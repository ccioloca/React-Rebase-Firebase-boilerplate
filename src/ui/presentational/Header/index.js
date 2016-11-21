import React from 'react'
import UserDropdown from './UserDropdown'
import PublicNavigation from './PublicNavigation'
import Container from '../../layout/Container'
import UserBreadcrumbs from './UserBreadcrumbs'

const Header = (props) => {
    const {hasUser, firebaseUser} = props
    const renderNavigation = hasUser ? <UserDropdown firebaseUser={firebaseUser}/> : <PublicNavigation />

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
