import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Profile from '../components/Profile'
import '../components/Profile.css'

export default function About() {
  return (
    <Container className="mt-4">
      <h1>About MadCloud</h1>
      <section style={{ marginTop: 24 }}>
        <h2>MadCloud Board</h2>
        <Row className="mt-4">
          <Col md={4}>
            <Profile first="Ava" last="Ramirez" title="President" email="ava.ramirez@wisc.edu" />
          </Col>
          <Col md={4}>
            <Profile first="Liam" last="Chen" title="Vice President" email="liam.chen@wisc.edu" />
          </Col>
          <Col md={4}>
            <Profile first="Maya" last="Singh" title="Events Coordinator" email="maya.singh@wisc.edu" />
          </Col>
        </Row>
      </section>
    </Container>
  )
}
