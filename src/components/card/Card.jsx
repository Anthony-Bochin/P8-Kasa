import React from 'react'
import { useLocation } from 'react-router-dom'
import './Card.css'
import arrow from '../../assets/arrow2.png'
import  { useState } from 'react';
import Carousel from '../carousel/Carousel';
import Tags from '../tags/Tags.jsx';

const Card = () => {
    const {state} = useLocation();
    const [isOpen, setIsOpen] = useState({
      description: false,
      equipments: false,
    });
  
    const toggle = (key) => {
      setIsOpen(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    };

    console.log(state);
    return (    
    <div className='body_Container body' >      
      <div className='Carousel'> 
        <Carousel images={state.pictures} />
          
      </div>
      
      <div className='title_Container'>
            <h2 className='Title' >{state.title}</h2>
            <p className='Subtitle'>{state.location}</p>        
      </div>
      <div className='tags_Container'>
        <Tags  tags={state.tags} />
      </div>
      <div>
        <div className='stars_Container'>

        </div>
        <div className='information_Container'>
            <div>

            </div>
            <div>

            </div>
        </div>
      </div>
      <div className='dropdown_Container'>
        <details className='description' open={isOpen.description} onToggle={() => toggle('description')} >
            <summary>Description <span> <img src={arrow}  className={`arrow2 ${isOpen.description ? 'rotated' : ''}`}    alt='arrow'   /> </span> </summary>
            <div>
                <div className='text_box' >
                  <p>{state.description}</p>
                </div>
            </div>
        </details>
        <details className='equipements' open={isOpen.equipements} onToggle={() => toggle('equipements')} >
            <summary>Equipments<span> <img src={arrow}  className={`arrow2 ${isOpen.equipements ? 'rotated' : ''}`}    alt='arrow'   /> </span> </summary>
            <div>
                <div className='text_box' >
                  <p>{state.equipments}</p>
                </div>
            </div>
        </details>
        

      </div>
      
    </div>
  )
}

export default Card
