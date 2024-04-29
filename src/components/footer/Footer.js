import React from 'react'
import './Footer.css'
import LogoFooter from './images/LogoFooter.svg'

const Footer = () => {
  return (
    <div className='FooterElement'>
      <img src={LogoFooter} alt=' ca ' className='FooterImage' />
      <div className='TextElementFooter'>
          <p>© 2020 Kasa. All rights reserved</p>
      </div>
      
    </div>
  )
}

export default Footer
