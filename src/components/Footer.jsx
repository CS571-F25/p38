import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content align-items-start justify-content-around">
          <Col xs="auto" className="footer-brand text-start">
            <p className="h2 mb-0">MadCloud</p>
          </Col>
          <Col xs="auto" className="footer-links text-start">
            <p className="h3 mb-2">Quick Links</p>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none">Home</Link></li>
              <li><Link to="/events" className="text-decoration-none">Events</Link></li>
              <li><Link to="/signup" className="text-decoration-none">Sign Up</Link></li>
              <li><Link to="/about" className="text-decoration-none">About</Link></li>
              <li><Link to="/contact" className="text-decoration-none">Contact</Link></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="footer-bottom text-center">
            <p className="mb-0" style={{ color: 'white' }}>&copy; {new Date().getFullYear()} MadCloud. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
