import React from 'react'
import { Nav, Navbar, MenuItem, NavItem, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import AuthenticatedNavigation from './AuthenticatedNavigation'
import PublicNavigation from './PublicNavigation'

const Navigation = (props) => {

    const renderNavigation = props.isLoggedIn ? <AuthenticatedNavigation /> : <PublicNavigation />

    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">React-Bootstrap</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            {renderNavigation}
        </Navbar>
    )
}

export default Navigation
