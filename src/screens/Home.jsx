import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="mt-4">
      <h1>MadCloud Home Page!</h1>
      <Row className="mt-4">
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Welcome to MadCloud</Card.Title>
              <Card.Text>
                Join our community of cloud enthusiasts in Madison! We host events, workshops, and networking opportunities.
              </Card.Text>
              <Button variant="primary" href="#/events">View Events</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Get Involved</Card.Title>
              <Card.Text>
                Become a member and connect with fellow cloud computing enthusiasts.
              </Card.Text>
              <Button variant="success" href="#/signup">Sign Up Today</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
