import React from 'react'
import './About.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const About = () => {
  return (
    <div>
      <Sidebar />
      <div className='about-page'>
        <div className='about-page-overlay'>
          <div className='about-page-overlay-container'>
            <div className='overlay-container-title'>
              <h1>About</h1>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
                impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className='overlay-container-image'>
              <img src="/default-profile.jpg" alt="" />
            </div>
            <div className='overlay-container-content'>
              <h2>Software Developer</h2>
              <p>Birthday:<span>29 Ekim 1999</span></p>
              <p>Phone:<span>539-607-2227</span></p>
              <p>Email:<span>engin.d3mir_cankulak@gmail.com</span></p>
              <p>City:<span>İstanbul, Türkiye</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
