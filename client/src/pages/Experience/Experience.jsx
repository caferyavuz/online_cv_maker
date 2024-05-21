import React from 'react'
import './Experience.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const Experience = () => {
  return (
    <div>
      <Sidebar />
      <div className='experience-page'>
        <div className='experience-page-overlay'>
          <div className='experience-page-overlay-container'>
          <div className='overlay-container-title'>
              <h1>Experience</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
