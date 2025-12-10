import React from 'react'
import { Container, Alert } from 'react-bootstrap'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  function handleSubmit(data) {
    //full functionality later 
  }

  return (
    <Container className="mt-4" style={{ maxWidth: '600px' }}>
      <h1 className="text-center">Contact MadCloud</h1>
      <Alert variant="info" className="mt-3">
        If you'd like to reach out, email us at <Alert.Link href="mailto:info@madcloud.example">info@madcloud.example</Alert.Link> or fill out the form below.
      </Alert>

      <ContactForm onSubmit={handleSubmit} />

    </Container>
  )
}
