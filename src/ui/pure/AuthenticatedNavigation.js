import React from 'react'
import { Nav, Navbar, MenuItem, NavItem, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const AuthenticatedNavigation = () => {
    return (
        <Nav pullRight>
            <NavDropdown eventKey={1} title="Dropdown" id="basic-nav-dropdown">
                <LinkContainer to="logout">
                    <MenuItem eventKey={1.1}>Logout</MenuItem>
                </LinkContainer>
            </NavDropdown>
        </Nav>
    )
}

export default AuthenticatedNavigation
