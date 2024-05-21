import React from 'react'
import './Skills.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const Skills = () => {
  return (
    <div>
      <Sidebar />
      <div className='skills-page'>
        <div className='skills-page-overlay'>
          <div className='skills-page-overlay-container'>
          <div className='overlay-container-title'>
              <h1>Skills</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
