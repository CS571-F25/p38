import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Profile from '../components/Profile'
import '../components/Profile.css'

export default function About() {
  return (
    <Container className="mt-4">
      <h1 className="mb-4">About MadCloud</h1>
      <p className="lead">The UW-Madison Collaborative Computing Group (MadCollab) was established in 2021 with a clear vision: to harness the power of collaborative research and cutting-edge computing technologies to address pressing challenges in today’s digital age. Located at the intersection of computer science and the social sciences, we are dedicated to advancing knowledge and pushing the boundaries of technology through multidisciplinary research. Explore our research here: <a href="https://collab.ischool.wisc.edu/research/">Research</a>.</p>
      
      <section className="my-5">
        <h2 className="mb-3">Our Mission</h2>
        <p className="lead">
          At the heart of the MadCollab's mission is a commitment to advancing knowledge and creating practical solutions that have a positive impact on individuals and society as a whole. We believe in the power of collaboration and interdisciplinary thinking to address complex challenges in the digital age. We are passionate about enhancing the interaction between humans and technology, ensuring that user experiences are intuitive, efficient, and inclusive.
        </p>
      </section>

      <section className="my-5">
        <h2 className="mb-4">MadCloud Board</h2>
        <Row className="g-4">
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
