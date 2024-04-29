import React from 'react'
import './Section2.css'
import Datas from '../../datas/Datas.json'

let data = Datas

const Section2 = () => {
  return (
    <div className="card-container" >
        {data.map((data) => (
        <div key={data.id} className="card">
          <a href='#'>
            <img src={data.cover} alt={data.title} className='CardPhoto'/>
            <p className='CardText'>{data.title}</p>
            </a>
        </div>
      ))}
    </div>
  )
}

export default Section2



