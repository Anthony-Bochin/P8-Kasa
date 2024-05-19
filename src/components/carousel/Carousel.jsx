import React from 'react'
import { useState } from 'react';
import './Carousel.css'; 
import arrow_left from '../../assets/arrow_left.svg'
import arrow_right from '../../assets/arrow_right.svg'

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious} className="left-arrow"><img src={arrow_left} alt='arrow_left' /> </button>
      <img src={images[currentIndex]} alt="img" className="carousel-image" />
      <button onClick={goToNext} className="right-arrow"><img src={arrow_right} alt='arrow_left' /></button>
    </div>
  );
};

export default Carousel;
