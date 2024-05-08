import React from 'react'
import './Cards.css'
import Datas from '../../datas/datas.json'
import {Link} from 'react-router-dom'

let data = Datas

const Cards = () => {
    return (
        <Link  to="./Card" className="card-container"  >
            {data.map((data) => (
            <div key={data.id} className="card">
                <img src={data.cover} alt={data.title} className='CardPhoto'/>
                <p className='CardText'>{data.title}</p>                
            </div>
          ))}
        </Link>
      )
    
  }


export default Cards;


