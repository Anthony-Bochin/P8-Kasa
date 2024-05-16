import React, {Fragment} from 'react'
import './Cards.css'
import datas from '../../datas/datas.json'
import {Link} from 'react-router-dom'


const Cards = () => {
    return (
          <div className="card  "  >
            {datas.map((data) => (
              <Fragment key={data.id}>
                <Link to={`./Card/${data.id}`} className=" card-container " state={data}  >
                  <img src={data.cover} alt={data.title} className='CardPhoto'/>
                  <p className='CardText'>{data.title}</p>
                </Link>                
              </Fragment>
          ))}
        </div>
      )
    
  }


export default Cards;


