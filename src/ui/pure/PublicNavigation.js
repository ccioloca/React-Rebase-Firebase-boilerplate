import React from 'react'
import { Nav, Navbar, MenuItem, NavItem, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const PublicNavigation = () => {
    return (
      <Navbar.Collapse>
          <Nav>
              <LinkContainer to="Dashboard">
                  <NavItem eventKey={1}>Dashboard</NavItem>
              </LinkContainer>
              <LinkContainer to="login">
                  <NavItem eventKey={2}>Login</NavItem>
              </LinkContainer>
              <LinkContainer to="register">
                  <NavItem eventKey={3}>Signup</NavItem>
              </LinkContainer>
          </Nav>
      </Navbar.Collapse>
    )
}

export default PublicNavigation
