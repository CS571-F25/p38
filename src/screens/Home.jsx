import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="mt-4">
      <div className="text-center mb-5">
        <h1 className="display-4">Welcome to MadCloud</h1>
        <p className="lead text-muted mt-3">
          The University of Wisconsin-Madison's premier student organization for cloud computing enthusiasts. 
          Whether you're a beginner exploring the cloud or an experienced developer, MadCloud provides the 
          resources, community, and hands-on experience to advance your skills.
        </p>
      </div>
      
      <Row className="mt-4">
        <Col md={4}>
          <Card className="mb-3 h-100">
            <Card.Body>
              <Card.Title>Learn Cloud Technologies</Card.Title>
              <Card.Text>
                Gain practical experience with AWS, Azure, and Google Cloud Platform through workshops, 
                tutorials, and certification prep sessions led by industry professionals and experienced students.
              </Card.Text>
              <Button variant="primary" href="#/events">Upcoming Events</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3 h-100">
            <Card.Body>
              <Card.Title>Build Real Projects</Card.Title>
              <Card.Text>
                Collaborate on cloud-based projects, participate in hackathons, and create portfolio-worthy 
                applications. Get mentorship from peers and access to cloud credits for your projects.
              </Card.Text>
              <Button variant="info" href="#/about" className="text-white">About Us</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3 h-100">
            <Card.Body>
              <Card.Title>Connect & Network</Card.Title>
              <Card.Text>
                Join a community of students passionate about cloud computing. Attend social events, 
                connect with industry recruiters, and build relationships that extend beyond the classroom.
              </Card.Text>
              <Button variant="success" href="#/signup">Join MadCloud</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="mt-5 p-4 pb-4 bg-light rounded mb-4">
        <h3 className="text-center mb-3">Why Join MadCloud?</h3>
        <Row>
          <Col md={6}>
            <ul className="list-unstyled">
              <li className="mb-2">✓ Free access to cloud platform workshops and resources</li>
              <li className="mb-2">✓ AWS, Azure, and GCP certification preparation</li>
              <li className="mb-2">✓ Hands-on project experience for your resume</li>
            </ul>
          </Col>
          <Col md={6}>
            <ul className="list-unstyled">
              <li className="mb-2">✓ Networking with tech industry professionals</li>
              <li className="mb-2">✓ Career development and internship opportunities</li>
              <li className="mb-2">✓ Inclusive community welcoming all skill levels</li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  )
}
