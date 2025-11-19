import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav">
        <ul>
          <li><NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/events" className={({isActive}) => isActive ? 'active' : ''}>Events</NavLink></li>
          <li><NavLink to="/signup" className={({isActive}) => isActive ? 'active' : ''}>Sign Up</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
