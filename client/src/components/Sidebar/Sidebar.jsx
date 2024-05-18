import React from 'react'
import './Sidebar.css'

import {SidebarData} from './SidebarData'
import { SocialData } from './SocialData'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-profile'>
        <div className='sidebar-img'></div>
        <p id='profile-name'>Engin Demir Cankulak</p>
      </div>
      <ul className='sidebar-social-list'>
        {SocialData.map((val, key) => {
          return (
            <li
              key={key}
              className='sidebar-row'
              onClick={() => {
              }}
            >
              <Link className='social-icon' to={val.path}><div id='icon'>{val.icon}</div></Link>
              
            </li>
          )
        })}
      </ul>
      <ul className='sidebar-list'>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className='sidebar-row'
              id={window.location.pathname === val.link ? 'active' : ''}
              onClick={() => {
                window.location.pathname = val.path
              }}
            >
              <div id='icon'>{val.icon}</div>
              <div id='title'>{val.title}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
