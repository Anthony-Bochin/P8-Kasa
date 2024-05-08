import React, { useState } from 'react';
import './Info.css';
import photoInfo from '../../assets/bannerInfo.png';
import arrow from '../../assets/arrow.svg';

const Info = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    fiabilite: false,
    respect: false,
    service: false,
    securite: false
  });

  // Fonction pour basculer l'état de l'élément dropdown correspondant
  const toggleDropdown = (key) => {
    setDropdownOpen(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  return (
    <div className='bodyInfo'>
      <img src={photoInfo} alt='photo banner info' className='photoInfo' />
      <div className='Info'>
        <div className='dropContainer'>
          <div className='dropDown'>
            <p className='textInfo'>Fiabilité</p>
            <span className={`arrow ${dropdownOpen.fiabilite ? 'rotated' : ''}`}
              onClick={() => toggleDropdown('fiabilite')}><img
              src={arrow}
              alt='svg arrow'
              
            /></span>
            
          </div>
          <span className='dropContent'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes</span>
        </div>

        {/* Les autres dropDowns ici */}
        <div className='dropContainer'>
          <div className='dropDown'>
            <p className='textInfo'>Respect</p>
            <img
              src={arrow}
              alt='svg arrow'
              className={`arrow ${dropdownOpen.respect ? 'rotated' : ''}`}
              onClick={() => toggleDropdown('respect')}
            />
          </div>
          <span>Texte supplémentaire...</span>
        </div>

        <div className='dropContainer'>
          <div className='dropDown'>
            <p className='textInfo'>Service</p>
            <img
              src={arrow}
              alt='svg arrow'
              className={`arrow ${dropdownOpen.service ? 'rotated' : ''}`}
              onClick={() => toggleDropdown('service')}
            />
          </div>
          <span>Texte supplémentaire...</span>
        </div>

        <div className='dropContainer'>
          <div className='dropDown'>
            <p className='textInfo'>Sécurité</p>
            <img
              src={arrow}
              alt='svg arrow'
              className={`arrow ${dropdownOpen.securite ? 'rotated' : ''}`}
              onClick={() => toggleDropdown('securite')}
            />
          </div>
          <span>Texte supplémentaire...</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
