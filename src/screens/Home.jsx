import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import BenefitsList from '../components/BenefitsList'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function Home() {
  return (
    <Container className="mt-4">
      <motion.div 
        className="text-center mb-5"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="display-4" style={{ fontWeight: 800, color: 'var(--badger-red)' }}>Welcome to MadCloud</h1>
        <p className="lead mt-3" style={{ color: 'var(--gray-dark)', fontWeight: 500 }}>
          The University of Wisconsin-Madison's premier student organization for cloud computing enthusiasts. 
          Whether you're a beginner exploring the cloud or an experienced developer, MadCloud provides the 
          resources, community, and hands-on experience to advance your skills.
        </p>
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Row className="mt-4">
          <Col md={4}>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <Card className="mb-3 h-100">
                <Card.Body>
                  <Card.Title style={{ fontFamily: 'Outfit', fontWeight: 700, color: 'var(--badger-red)' }}>Learn Cloud Technologies</Card.Title>
                  <Card.Text>
                    Gain practical experience with AWS, Azure, and Google Cloud Platform through workshops, 
                    tutorials, and certification prep sessions led by industry professionals and experienced students.
                  </Card.Text>
                  <Button variant="primary" href="#/events">Upcoming Events</Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <Card className="mb-3 h-100">
                <Card.Body>
                  <Card.Title style={{ fontFamily: 'Outfit', fontWeight: 700, color: 'var(--badger-red)' }}>Build Real Projects</Card.Title>
                  <Card.Text>
                    Collaborate on cloud-based projects, participate in hackathons, and create portfolio-worthy 
                    applications. Get mentorship from peers and access to cloud credits for your projects.
                  </Card.Text>
                  <Button variant="info" href="#/about" className="text-white">About Us</Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <Card className="mb-3 h-100">
                <Card.Body>
                  <Card.Title style={{ fontFamily: 'Outfit', fontWeight: 700, color: 'var(--badger-red)' }}>Connect & Network</Card.Title>
                  <Card.Text>
                    Join a community of students passionate about cloud computing. Attend social events, 
                    connect with industry recruiters, and build relationships that extend beyond the classroom.
                  </Card.Text>
                  <Button variant="success" href="#/signup">Join MadCloud</Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </motion.div>

      <motion.div 
        className="mt-5 p-4 pb-4 rounded mb-4 glass-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-center mb-3" style={{ fontFamily: 'Outfit', fontWeight: 700, color: 'var(--badger-red)' }}>Why Join MadCloud?</h2>
        <BenefitsList />
      </motion.div>
    </Container>
  )
}
