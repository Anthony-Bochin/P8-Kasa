import React from 'react'
import './Body.css'
import Cards from './Cards';
import data from '../../datas/datas.json'

function Body() {
  return (
    <div className="body">
      <div className='banner'>
          <h1 className='title'>Chez vous, partout et ailleurs</h1>
      </div>
      
      <Cards />
    </div>
  );
}

export default Body;
