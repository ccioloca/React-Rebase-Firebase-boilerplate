import React from 'react'
import AuthenticatedNavigation from '../AuthenticatedNavigation'
import PublicNavigation from '../PublicNavigation'
import Container from '../../layout/Container'

const Header = (props) => {

    const renderNavigation = props.hasUser ? <AuthenticatedNavigation photoURL={props.photoURL}/> : <PublicNavigation />

    return (
        props.loading
        ? null
        : <header className='header'>
              <Container>
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
                    <nav className="header__navigation">
                      <div className="breadcrumbs">
                        <span className="breadcrumbs__item ">

                        </span>
                      </div>
                    </nav>
                  </div>
                  <div className='header__right'>
                    {renderNavigation}
                  </div>
                </div>

              </Container>
          </header>
    )
}

export default Header
