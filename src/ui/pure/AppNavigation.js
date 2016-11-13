import React from 'react'
import { Nav, Navbar, MenuItem, NavItem, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import NavRight from './NavRight'

const AppNavigation = (props) => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">React-Bootstrap</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
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
                <NavRight isLoggedIn={props.isLoggedIn}/>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppNavigation
