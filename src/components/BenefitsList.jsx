import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function BenefitsList() {
  const benefits = [
    'Free access to cloud platform workshops and resources',
    'AWS, Azure, and GCP certification preparation',
    'Hands-on project experience for your resume',
    'Networking with tech industry professionals',
    'Career development and internship opportunities',
    'Inclusive community welcoming all skill levels'
  ]

  return (
    <Row>
      <Col md={6}>
        <ul className="list-unstyled">
          {benefits.slice(0, 3).map((benefit, index) => (
            <li key={index} className="mb-2">✓ {benefit}</li>
          ))}
        </ul>
      </Col>
      <Col md={6}>
        <ul className="list-unstyled">
          {benefits.slice(3).map((benefit, index) => (
            <li key={index} className="mb-2">✓ {benefit}</li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}
