import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logoKasa from '../../assets/logoKasa.png'

const Header = () => {
  return (
    <div className='navBar'>
        <img src={logoKasa} alt='logo de kasa' className='photoKasa' />
        <div className='linkNav'>
          <Link to='/' className='linkHome'>ACCUEIL</Link>
          <Link to='./Info'className='linkAbout'>A PROPOS</Link>
        </div>
        
    </div>
  )
}

export default Header
