import React from 'react'
import './Services.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const Services = () => {
  return (
    <div>
      <Sidebar />
      <div className='services-page'>
        <div className='services-page-overlay'>
          <div className='services-page-overlay-text'>
            <p>Engin Demir Cankulak</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
