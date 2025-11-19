import React from 'react'
import './Profile.css'

export default function Profile({ first = '', last = '', img = '', title = '', email = '' }) {
  const name = `${first} ${last}`.trim()
  const initials = `${first?.[0] || ''}${last?.[0] || ''}`.toUpperCase()

  return (
    <div className="profile">
      <div className="avatar">
        {img ? (
          <img src={img} alt={name || 'Profile'} />
        ) : (
          <div className="placeholder">{initials || '?'}</div>
        )}
      </div>
      <div className="info">
        <div className="name">{name || 'Unnamed'}</div>
        {title && <div className="title">{title}</div>}
        {email && (
          <div className="email">
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        )}
      </div>
    </div>
  )
}
