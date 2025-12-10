import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import Event from '../components/Event'

function Events() {
  const events = [
    {
      title: 'Cloud Computing Workshop',
      description: 'Learn the fundamentals of cloud architecture',
      date: 'Dec 15',
      badgeVariant: 'primary'
    },
    {
      title: 'AWS Study Session',
      description: 'Prepare for AWS certification together',
      date: 'Dec 20',
      badgeVariant: 'success'
    },
    {
      title: 'Holiday Social',
      description: 'End of year celebration and networking',
      date: 'Dec 22',
      badgeVariant: 'info'
    }
  ]

  return (
    <Container className="mt-4">
      <h1>Events!</h1>
      <ListGroup className="mt-4">
        {events.map((event, index) => (
          <Event
            key={index}
            title={event.title}
            description={event.description}
            date={event.date}
            badgeVariant={event.badgeVariant}
          />
        ))}
      </ListGroup>
    </Container>
  )
}

export default Events
