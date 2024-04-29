import React from 'react'
import PhotoBanner from './ImageBanner.png'
import './Section1.css'

const Section1 = () => {
  return (
    <div className='BannerElement'>
        <div>
            <img src={PhotoBanner} alt='photo de la banner '  className='PhotoBanner'/>
            <p className='TextElement' >Chez vous,partout et ailleurs </p>
        </div>
        
    </div>
  )
}

export default Section1
