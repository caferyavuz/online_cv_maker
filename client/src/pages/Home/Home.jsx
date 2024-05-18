import React from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const Home = () => {
  return (
    <div>
      <Sidebar />
      <div className='home-page'>
        <div className='home-page-overlay'>
          <div className='home-page-overlay-text'>
            <p>Engin Demir Cankulak</p>
            <p style={{fontSize: '36px', display: 'inline', marginLeft: '150px'}}>
              I'm Software Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
