import React from 'react'
import { Card } from 'react-bootstrap'
import './Profile.css'

export default function Profile({ first = '', last = '', img = '', title = '', email = '' }) {
  const name = `${first} ${last}`.trim()
  const initials = `${first?.[0] || ''}${last?.[0] || ''}`.toUpperCase()

  return (
    <Card className="h-100 text-center profile-card">
      <Card.Body>
        <div className="avatar mb-3">
          {img ? (
            <img src={img} alt={name || 'Profile'} className="rounded-circle" />
          ) : (
            <div className="placeholder rounded-circle">{initials || '?'}</div>
          )}
        </div>
        <Card.Title className="mb-2">{name || 'Unnamed'}</Card.Title>
        {title && <Card.Subtitle className="mb-3 text-muted">{title}</Card.Subtitle>}
        {email && (
          <Card.Link href={`mailto:${email}`} className="d-block">
            {email}
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  )
}
