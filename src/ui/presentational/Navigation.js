import React from 'react'
import AuthenticatedNavigation from './AuthenticatedNavigation'
import PublicNavigation from './PublicNavigation'

const Navigation = (props) => {

    const renderNavigation = props.hasUser ? <AuthenticatedNavigation photoURL={props.photoURL}/> : <PublicNavigation />

    return (
        props.loading
        ? null
        : <header className='header'>
              <div className='header__container l-container'>
                <div>
                  <div className="logo">
                    <svg width="50" height="50">
                      <circle cx="25" cy="25" r="20" stroke="green" strokeWidth="4" fill="#2A5157" />
                    </svg>
                  </div>
                  <nav className="header__navigation">
                    <div className="breadcrumbs">
                      <span className="breadcrumbs__item ">
                        Boilerplate
                      </span>
                    </div>
                  </nav>
                </div>
              </div>
              {renderNavigation}
          </header>
    )
}

export default Navigation
