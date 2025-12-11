import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { motion } from 'framer-motion'
import Event from '../components/Event'
import Hero from '../components/Hero'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

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
      <Hero 
        title="Upcoming Events" 
        subtitle="Join us for workshops, study sessions, and networking opportunities"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ListGroup className="mt-4">
          {events.map((event, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Event
                title={event.title}
                description={event.description}
                date={event.date}
                badgeVariant={event.badgeVariant}
              />
            </motion.div>
          ))}
        </ListGroup>
      </motion.div>
    </Container>
  )
}

export default Events
