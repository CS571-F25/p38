import React, { useState } from 'react'
import { Form, Button, Alert, Spinner } from 'react-bootstrap'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function ContactForm({ onSubmit }) {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)
    const [sending, setSending] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSending(true)
        setError(false)
        setSubmitted(false)

        // EmailJS configuration
        const serviceID = 'service_gbl5tyi'
        const templateID = 'template_5cybf1k'
        const publicKey = 'Dd95P3Cbu601cF1--'

        const templateParams = {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_email: 'uwmadcloud@gmail.com'
        }

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text)
                setSubmitted(true)
                setForm({ name: '', email: '', message: '' })
                setTimeout(() => setSubmitted(false), 5000)
                setSending(false)
                if (onSubmit) onSubmit(form)
            })
            .catch((error) => {
                console.error('Failed to send email:', error)
                setError(true)
                setTimeout(() => setError(false), 5000)
                setSending(false)
            })
    }

    return (
        <motion.div 
            className="mt-4 glass-container p-4" 
            style={{ maxWidth: 600 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
            {submitted && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Alert variant="success">
                        ✓ Your message has been sent successfully! We'll get back to you soon.
                    </Alert>
                </motion.div>
            )}
            {error && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Alert variant="danger">
                        ✗ Failed to send message. Please check your EmailJS configuration or try again later.
                    </Alert>
                </motion.div>
            )}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        disabled={sending}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        disabled={sending}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        placeholder="Type your message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        disabled={sending}
                    />
                </Form.Group>

                <motion.div whileHover={{ scale: sending ? 1 : 1.05 }} whileTap={{ scale: sending ? 1 : 0.95 }}>
                    <Button variant="primary" type="submit" className="w-100" disabled={sending}>
                        {sending ? (
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    className="me-2"
                                />
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </Button>
                </motion.div>
            </Form>
        </motion.div>
    )
}
