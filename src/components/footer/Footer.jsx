import React from 'react'
import './Footer.css'
import LogoFooter from '../../assets/logoFooter.svg'


const Footer = () => {
  return (
    <div className='FooterElement'>
      <img src={LogoFooter} alt='logo du footer' className='FooterImage'/>
      <div className='TextElementFooter'>
          <p>© 2020 Kasa. All rights reserved</p>
      </div>
      
    </div>
  )
}

export default Footer
