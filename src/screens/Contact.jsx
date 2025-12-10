import React from 'react'
import { Container, Alert } from 'react-bootstrap'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  function handleSubmit(data) {
    //full functionality later 
  }

  return (
    <Container className="mt-4" style={{ maxWidth: '600px' }}>
      <motion.h1 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: 'Outfit', fontWeight: 800, color: 'var(--badger-red)' }}
      >
        Contact MadCloud
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Alert 
          variant="info" 
          className="mt-3"
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(197, 5, 12, 0.1)',
            border: '1px solid rgba(197, 5, 12, 0.3)',
            borderRadius: '12px'
          }}
        >
          If you'd like to reach out, email us at <Alert.Link href="mailto:info@madcloud.example" style={{ fontWeight: 700, color: 'var(--badger-red)' }}>info@madcloud.example</Alert.Link> or fill out the form below.
        </Alert>

        <ContactForm onSubmit={handleSubmit} />
      </motion.div>
    </Container>
  )
}
