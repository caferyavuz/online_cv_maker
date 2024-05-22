import React from 'react'
import './ProgressBar.css'
import {ProgressBarData} from './ProgressBarData'

const ProgressBar = () => {
  return (
    <div className='container'>
      {ProgressBarData.map((val, key) => {
        return (
          <div className='skill-box'>
            <span className='title'>{val.title}</span>
            <div className='skill-bar'>
              <span className='skill-per' style={{width: val.bar}}>
                <span className='tooltip'>{val.bar}</span>
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProgressBar
