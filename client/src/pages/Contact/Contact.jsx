import React from 'react'
import './Contact.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const Contact = () => {
  return (
    <div>
      <Sidebar />
      <div className='contact-page'>
        <div className='contact-page-overlay'>
          <div className='contact-page-overlay-text'>
            <p>Engin Demir Cankulak</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
