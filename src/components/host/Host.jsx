// components/host/Host.jsx
import React from 'react';
import './Host.css'

const Host = ({ host, photo }) => {
  return (
    <div className="host">
        <div><p className="host-name">{host}</p></div>
        <div> <img src={photo} alt={host} className="host-photo" /> </div>      
    </div>
  );
};



export default Host;
