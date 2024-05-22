// components/error/NotFound.js
import React from 'react';
import './notfound.css';
import error from '../../assets/404.svg'

const NotFound = () => {
  return (
    <div className='error_Container' >
        <img src={error} alt='error_logo' className='error_image' ></img>
        <p className='title'>Oups! La page que vous demandez n'existe pas.</p>
        <p className='subtile' >Retourner sur la page d'accueil</p>
    </div>
  );
}

export default NotFound;
