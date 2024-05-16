import React from 'react'
import { useLocation } from 'react-router-dom'


const Card = () => {
    const {state} = useLocation();

    console.log(state);
  return (
    <div>

        <img src={state.pictures[4]} alt="img" />
        <p>card photo</p>
    </div>
  )
}

export default Card
