import React from 'react'
import './Tags.css'
import { useState } from 'react';

const Tags = ({ tags }) => {
    return (
      <div className='tags_Container'>
        {tags.map((tag, index) => (
          <p key={index} className='tags'>{tag}</p>
        ))}
      </div>
    );
  };

  
export default Tags

