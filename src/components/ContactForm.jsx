import React, { useState } from 'react'

export default function ContactForm({ onSubmit }) {
	const [form, setForm] = useState({ name: '', email: '', message: '' })

	function handleChange(e) {
		const { name, value } = e.target
		setForm(prev => ({ ...prev, [name]: value }))
	}

	function handleSubmit(e) {
		e.preventDefault()
		if (onSubmit) onSubmit(form)
		alert('Message sent (demo): ' + (form.message || '(no message)'))
		setForm({ name: '', email: '', message: '' })
	}

	return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
                <div style={{ marginBottom: 8 }}>
                    <label htmlFor="name">Name</label><br />
                    <input id="name" name="name" value={form.name} onChange={handleChange} style={{ width: '100%' }} />
                </div>
                <div style={{ marginBottom: 8 }}>
                    <label htmlFor="email">Email</label><br />
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} style={{ width: '100%' }} />
                </div>
                <div style={{ marginBottom: 8 }}>
                    <label htmlFor="message">Message</label><br />
                    <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} style={{ width: '100%' }} />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
	)
}
