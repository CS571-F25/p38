import React from 'react'
import { Container, ListGroup, Badge } from 'react-bootstrap'

function Events() {
  return (
    <Container className="mt-4">
      <h1>Events!</h1>
      <ListGroup className="mt-4">
        <ListGroup.Item>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5>Cloud Computing Workshop</h5>
              <p className="mb-0">Learn the fundamentals of cloud architecture</p>
            </div>
            <Badge bg="primary">Dec 15</Badge>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5>AWS Study Session</h5>
              <p className="mb-0">Prepare for AWS certification together</p>
            </div>
            <Badge bg="success">Dec 20</Badge>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5>Holiday Social</h5>
              <p className="mb-0">End of year celebration and networking</p>
            </div>
            <Badge bg="info">Dec 22</Badge>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  )
}

export default Events
