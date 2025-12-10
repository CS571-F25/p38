import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

export default function BenefitsList() {
  const benefits = [
    'Free access to cloud platform workshops and resources',
    'AWS, Azure, and GCP certification preparation',
    'Hands-on project experience for your resume',
    'Networking with tech industry professionals',
    'Career development and internship opportunities',
    'Inclusive community welcoming all skill levels'
  ]

  return (
    <Row className="justify-content-center">
      <Col md={5}>
        <ul className="list-unstyled" style={{ textAlign: 'left' }}>
          {benefits.slice(0, 3).map((benefit, index) => (
            <motion.li 
              key={index} 
              className="mb-3"
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ x: 10, scale: 1.05 }}
              style={{ 
                fontWeight: 500,
                color: 'var(--gray-dark)',
                fontSize: '1.05rem',
                display: 'flex',
                alignItems: 'flex-start'
              }}
            >
              <span style={{ color: 'var(--badger-red)', fontWeight: 700, marginRight: '8px', flexShrink: 0 }}>✓</span> 
              <span>{benefit}</span>
            </motion.li>
          ))}
        </ul>
      </Col>
      <Col md={5}>
        <ul className="list-unstyled" style={{ textAlign: 'left' }}>
          {benefits.slice(3).map((benefit, index) => (
            <motion.li 
              key={index} 
              className="mb-3"
              custom={index + 3}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ x: 10, scale: 1.05 }}
              style={{ 
                fontWeight: 500,
                color: 'var(--gray-dark)',
                fontSize: '1.05rem',
                display: 'flex',
                alignItems: 'flex-start'
              }}
            >
              <span style={{ color: 'var(--badger-red)', fontWeight: 700, marginRight: '8px', flexShrink: 0 }}>✓</span> 
              <span>{benefit}</span>
            </motion.li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}
