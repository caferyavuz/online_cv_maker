import React from 'react'
import './About.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const About = () => {
  return (
    <div>
      <Sidebar />
      <div className='about-page'>
        <div className='about-page-overlay'>
          <div className='about-page-overlay-text'>
            <p>Engin Demir Cankulak</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
