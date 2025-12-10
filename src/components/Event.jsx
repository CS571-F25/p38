import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap'

export default function Event({ title, description, date, badgeVariant = 'primary' }) {
  return (
    <ListGroup.Item>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5>{title}</h5>
          <p className="mb-0">{description}</p>
        </div>
        <Badge bg={badgeVariant}>{date}</Badge>
      </div>
    </ListGroup.Item>
  )
}
