import React from 'react'
import './Contact.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const Contact = () => {
  return (
    <div>
      <Sidebar />
      <div className='contact-page'>
        <div className='contact-page-overlay'>
          <div className='contact-page-overlay-container'>
          <div className='overlay-container-title'>
              <h1>Contact</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
