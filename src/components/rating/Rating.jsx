import React from 'react'
import './Rating.css'
import { useState } from 'react';
import star_inactive from '../../assets/star-inactive.svg'
import star_active from '../../assets/star-active.svg'
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome';




const Rating = ({ rating }) => {
    const totalStars = 5;
    const active = parseInt(rating);
    const inactive = totalStars - active;
  
    const starsArray = [];
  
    for (let i = 0; i < active; i++) {
      starsArray.push(<span key={i}> <img src={star_active} alt='start_checked'/> </span>);
    }
    for (let i = 0; i < inactive; i++) {
      starsArray.push(<span key={active + i}><img src={star_inactive} alt='start_checked' className='inactive' /></span>);
    }
  
    return <div className='stars' >{starsArray} </div>;
  };
  
  export default Rating

