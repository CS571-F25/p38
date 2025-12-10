import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap'
import { motion } from 'framer-motion'

export default function Event({ title, description, date, badgeVariant = 'primary' }) {
  return (
    <ListGroup.Item 
      as={motion.div}
      whileHover={{ scale: 1.02, x: 10 }}
      transition={{ duration: 0.2 }}
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        border: '1px solid rgba(197, 5, 12, 0.15)',
        borderRadius: '12px',
        marginBottom: '12px',
        cursor: 'pointer'
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5 style={{ fontFamily: 'Outfit', fontWeight: 700, color: 'var(--badger-red)', marginBottom: '8px' }}>{title}</h5>
          <p className="mb-0" style={{ color: 'var(--gray-dark)' }}>{description}</p>
        </div>
        <Badge 
          bg={badgeVariant}
          style={{
            padding: '10px 16px',
            fontSize: '1rem',
            fontWeight: 600,
            borderRadius: '10px',
            background: 'linear-gradient(135deg, var(--badger-red), var(--badger-red-dark))',
            border: 'none'
          }}
        >
          {date}
        </Badge>
      </div>
    </ListGroup.Item>
  )
}
