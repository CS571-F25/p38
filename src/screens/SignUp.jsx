import React, { useState } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'

export default function SignUp() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <Container className="mt-4" style={{ maxWidth: '600px' }}>
      <h1>Sign Up for MadCloud!</h1>
      {submitted && (
        <Alert variant="success" className="mt-3">
          Thank you for signing up! We'll be in touch soon.
        </Alert>
      )}
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>University Status</Form.Label>
          <Form.Select required>
            <option value="">Select...</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="graduate">Graduate</option>
            <option value="faculty">Faculty</option>
            <option value="staff">Staff</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="I agree to receive event notifications" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}
