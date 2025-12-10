import React, { useState } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import { motion } from 'framer-motion'

export default function SignUp() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <Container className="mt-4" style={{ maxWidth: '600px' }}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: 'Outfit', fontWeight: 800, color: 'var(--badger-red)' }}
      >
        Sign Up for MadCloud!
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-container p-4 mt-4"
      >
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Alert variant="success" className="mt-3">
              Thank you for signing up! We'll be in touch soon.
            </Alert>
          </motion.div>
        )}
        <Form onSubmit={handleSubmit} className="mt-3">
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: 600, color: 'var(--text-dark)' }}>University Status</Form.Label>
            <Form.Select required>
              <option value="">Select...</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
              <option value="faculty">Faculty</option>
              <option value="staff">Staff</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="I agree to receive event notifications" style={{ fontWeight: 500 }} />
          </Form.Group>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </motion.div>
        </Form>
      </motion.div>
    </Container>
  )
}
