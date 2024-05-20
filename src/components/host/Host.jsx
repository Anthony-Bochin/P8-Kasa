// components/host/Host.jsx
import React from 'react';
import './Host.css'

const Host = ({ host, photo }) => {
  return (
    <div className="host">
        <div> <img src={photo} alt={host} className="host-photo" /> </div>
        <div><p className="host-name">{host}</p></div>
      
    </div>
  );
};



export default Host;
