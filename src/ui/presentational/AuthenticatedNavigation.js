import React from 'react'
import { Nav, Navbar, MenuItem, NavItem, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Avatar from './Avatar'

const AuthenticatedNavigation = (props) => {
    return (
      <Navbar.Collapse>
          <Nav pullRight className='hidden-xs'>
              <NavDropdown eventKey={1} title={<Avatar size="50px" photoURL={props.photoURL} />} id="basic-nav-dropdown">
                  <LinkContainer to="logout">
                      <MenuItem eventKey={1.1}>Logout</MenuItem>
                  </LinkContainer>
              </NavDropdown>
          </Nav>
          <Nav pullRight className='visible-xs'>
              <LinkContainer to="logout">
                  <NavItem eventKey={2}>Logout</NavItem>
              </LinkContainer>
          </Nav>
      </Navbar.Collapse>
    )
}

export default AuthenticatedNavigation
