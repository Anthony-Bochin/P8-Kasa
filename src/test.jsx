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
            <span><img
              src={arrow}
              alt='svg arrow'
              className={`arrow ${dropdownOpen.fiabilite ? 'rotated' : ''}`}
              onClick={() => toggleDropdown('fiabilite')}
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




.bodyInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;
  width: 100%;
}

.photoInfo {
  max-width: 768px;
  width: 100%;
  height: 200px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #000;
  mix-blend-mode: darken;
  object-fit: cover;
}

.Info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
}

.dropDown {
  display: flex;
  width: 335px;
  height: 30px;
  padding: 10px 0px 10px 10px;
  align-items: center;
  border-radius: 5px;
  background: var(--Red, #FF6060);
  width: 100%;
  transition: all 1s ease-in-out;
}

.dropDown.rotated {
  padding-right: 10px; /* Ajoutez un padding-right pour compenser le décalage */
}


.textInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 0;
  align-self: stretch;
  color: #FFF;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 142.6%; /* 18.538px */
}

.dropdown {
position: relative;
display: inline-block;
}

.dropdown-button {
background-color: #4CAF50;
color: white;
padding: 10px;
border: none;
cursor: pointer;
}

.dropdown-content {
display: none;
position: absolute;
background-color: #f9f9f9;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
padding: 10px;
z-index: 1;
transition: all 0.3s ease;
}

.dropdown-content.open {
display: block;
}

.dropdown-content p {
margin: 0;
}

.arrow {
  padding-top: 3px;
  cursor: pointer;
}

.dropContainer {
  max-width: 758px;
  width: 100%;
}

.dropContent {
  max-width: 728px;
  width: 100%;
  
  display: flex;
  padding: 20px;
  background: grey;
}

.arrow {
  transition: transform 0.3s ease; /* Ajoute une transition pour une animation fluide */
  transform-origin: center;
  width: 33px;
  height: 33px; /* Ajuste le point de transformation au centre de l'image */
}

.rotated {
  transform: translate(100%, 0);
  transform: rotate(180deg); /* Fait pivoter l'image de 180 degrés */
}
span {
  display: flex;
  align-items: center;
  justify-content: center;
}
