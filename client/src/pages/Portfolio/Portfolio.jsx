import React from 'react'
import './Portfolio.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const Portfolio = () => {
  return (
    <div>
      <Sidebar />
      <div className='portfolio-page'>
        <div className='portfolio-page-overlay'>
          <div className='portfolio-page-overlay-container'>
          <div className='overlay-container-title'>
              <h1>Portfolio</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
