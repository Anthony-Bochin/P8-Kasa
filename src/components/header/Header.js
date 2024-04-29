import React from 'react'
import './Header.css'
import Logo from './images/LogoKasa.svg';

const Header = () => {
  return (
    <div className='Banner'>
      <div>
          <img src={Logo} alt='Logo de Kasa' className='LogoKasa' />
      </div>
      
      <div className='NavBar' >
        <a href='#' className='Link1'>ACCUEIL</a>
        <a href='#' className='Link2 '>A PROPOS</a>
      </div>
      
    </div>
  )
}

export default Header
