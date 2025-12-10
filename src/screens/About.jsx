import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import Profile from '../components/Profile'
import '../components/Profile.css'

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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function About() {
  return (
    <Container className="mt-4">
      <motion.h1 
        className="mb-4"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: 'Outfit', fontWeight: 800, color: 'var(--badger-red)' }}
      >
        About MadCloud
      </motion.h1>
      <motion.p 
        className="lead"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ color: 'var(--gray-dark)', fontWeight: 500 }}
      >
        The UW-Madison Collaborative Computing Group (MadCollab) was established in 2021 with a clear vision: to harness the power of collaborative research and cutting-edge computing technologies to address pressing challenges in today's digital age. Located at the intersection of computer science and the social sciences, we are dedicated to advancing knowledge and pushing the boundaries of technology through multidisciplinary research. Explore our research here: <a href="https://collab.ischool.wisc.edu/research/">Research</a>.
      </motion.p>
      
      <motion.section 
        className="my-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="mb-3" style={{ fontFamily: 'Outfit', fontWeight: 700, color: 'var(--badger-red)' }}>Our Mission</h2>
        <p className="lead" style={{ color: 'var(--gray-dark)', fontWeight: 500 }}>
          At the heart of the MadCollab's mission is a commitment to advancing knowledge and creating practical solutions that have a positive impact on individuals and society as a whole. We believe in the power of collaboration and interdisciplinary thinking to address complex challenges in the digital age. We are passionate about enhancing the interaction between humans and technology, ensuring that user experiences are intuitive, efficient, and inclusive.
        </p>
      </motion.section>

      <motion.section 
        className="my-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="mb-4" style={{ fontFamily: 'Outfit', fontWeight: 700, color: 'var(--badger-red)' }}>MadCloud Board</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row className="g-4">
            <Col md={4}>
              <motion.div variants={itemVariants}>
                <Profile first="Harsh" last="Rathore" title="President" email="hvardhan2@wisc.edu" />
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div variants={itemVariants}>
                <Profile first="Gurraj" last="Singh" title="Vice President" email="gsingh62@wisc.edu" />
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div variants={itemVariants}>
                <Profile first="Madeline" last="Kwong" title="Social Media Chair" email="mkwong5@wisc.edu" />
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div variants={itemVariants}>
                <Profile first="Calvin" last="Prajogo" title="Event Coordinator" email="prajogo@wisc.edu" />
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div variants={itemVariants}>
                <Profile first="Riya" last="Goel" title="Secretary" email="rgoel28@wisc.edu" />
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div variants={itemVariants}>
                <Profile first="Matt" last="Domingo" title="Outreach Chair" email="mgdomingo@wisc.edu" />
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </motion.section>
    </Container>
  )
}
