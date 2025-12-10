import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Header.css'

export default function Header() {
  return (
    <Navbar variant="dark" fixed="top" className="site-header">
      <Container fluid className="position-relative">
        <Navbar.Brand as={NavLink} to="/" className="header-brand position-absolute">MadCloud</Navbar.Brand>
        <Nav className="w-100 justify-content-center">
          <Nav.Link as={NavLink} to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/events" className={({isActive}) => isActive ? 'active' : ''}>Events</Nav.Link>
          <Nav.Link as={NavLink} to="/signup" className={({isActive}) => isActive ? 'active' : ''}>Sign Up</Nav.Link>
          <Nav.Link as={NavLink} to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
