import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="custom-navbar">
      <LinkContainer to="/">
        <Navbar.Brand>School Management System</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
          <NavDropdown title="More" id="collasible-nav-dropdown">
            <LinkContainer to="/services">
              <NavDropdown.Item>Services</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/events">
              <NavDropdown.Item>Events</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signup">
            <Nav.Link>Sign Up</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
