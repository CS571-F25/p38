import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { motion } from 'framer-motion'

export default function ContactForm({ onSubmit }) {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (onSubmit) onSubmit(form)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
        setForm({ name: '', email: '', message: '' })
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
                    <Alert variant="success">Your message has been sent (demo).</Alert>
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
                    />
                </Form.Group>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="primary" type="submit" className="w-100">
                        Send
                    </Button>
                </motion.div>
            </Form>
        </motion.div>
    )
}
