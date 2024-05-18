import React from 'react'
import './Portfolio.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const Portfolio = () => {
  return (
    <div>
      <Sidebar />
      <div className='portfolio-page'>
        <div className='portfolio-page-overlay'>
          <div className='portfolio-page-overlay-text'>
            <p>Engin Demir Cankulak</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
