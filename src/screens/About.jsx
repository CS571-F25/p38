import React from 'react'
import Profile from '../components/Profile'
import '../components/Profile.css'

export default function About() {
  return (
    <div>
      <h1>About MadCloud</h1>
      <section style={{ marginTop: 24 }}>
              <h2>MadCloud Board</h2>
             <div className="profiles-grid" style={{ display: "flex", gap: "20px" }}>
                       <Profile first="Ava" last="Ramirez" title="President" email="ava.ramirez@wisc.edu" />
                       <Profile first="Liam" last="Chen" title="Vice President" email="liam.chen@wisc.edu" />
                       <Profile first="Maya" last="Singh" title="Events Coordinator" email="maya.singh@wisc.edu" />
                     </div>
            </section>
    </div>
  )
}
