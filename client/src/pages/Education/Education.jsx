import React from 'react'
import './Education.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const Education = () => {
  return (
    <div>
      <Sidebar />
      <div className='education-page'>
        <div className='education-page-overlay'>
          <div className='education-page-overlay-container'>
          <div className='overlay-container-title'>
              <h1>Education</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
