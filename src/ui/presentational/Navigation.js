import React from 'react'
import { Link } from 'react-router'
import { Nav, Navbar, MenuItem, NavItem, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import AuthenticatedNavigation from './AuthenticatedNavigation'
import PublicNavigation from './PublicNavigation'

const Navigation = (props) => {
    const brandLink = props.hasUser ? '/dashboard' : '/'
    const renderNavigation = props.hasUser ? <AuthenticatedNavigation photoURL={props.photoURL}/> : <PublicNavigation />

    return (
        props.loading
        ? null
        : <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                  <Navbar.Brand>
                      <Link to={brandLink}>React Bootstrap</Link>
                  </Navbar.Brand>
                  <Navbar.Toggle />
              </Navbar.Header>
              {renderNavigation}
          </Navbar>
    )
}

export default Navigation
