import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  function handleSubmit(data) {
    //full functionality later 
  }

  return (
    <div>
      <h1>Contact MadCloud</h1>
      <p>If you'd like to reach out, email us at <a href="mailto:info@madcloud.example">info@madcloud.example</a> or fill out the form below.</p>

      <ContactForm onSubmit={handleSubmit} />

    </div>
  )
}
