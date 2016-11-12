import React from 'react';
import { Nav, Navbar, MenuItem, NavItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
        <LinkContainer to="loggedin">
            <NavItem eventKey={1}>Loggedin</NavItem>
        </LinkContainer>
        <LinkContainer to="login">
            <NavItem eventKey={2}>Login</NavItem>
        </LinkContainer>
        <LinkContainer to="logout">
            <NavItem eventKey={3}>Logout</NavItem>
        </LinkContainer>
        <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={4.1}>Action</MenuItem>
          <MenuItem eventKey={4.2}>Another action</MenuItem>
          <MenuItem eventKey={4.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={4.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)}

export default AppNavigation
