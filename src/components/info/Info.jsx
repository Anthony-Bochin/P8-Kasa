import React, { useState } from 'react';
import './Info.css';
import photoInfo from '../../assets/bannerInfo.png';
import arrow from '../../assets/arrow2.png';

const Info = () => {
  const [isOpen, setIsOpen] = useState({
    fiabilite: false,
    respect: false,
    service: false,
    securite: false
  });

  const toggle = (key) => {
    setIsOpen(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className='bodyInfo'>
      <img src={photoInfo} alt='maison' className='photoInfo' />
      <div className='Info'>
        <details className='details' open={isOpen.fiabilite} onToggle={() => toggle('fiabilite')}>
          <summary> <span>Fiabilité </span> <img src={arrow} alt='arrow' className={`arrow2 ${isOpen.fiabilite ? 'rotated' : ''}`} /></summary>
          <div>
            <div className='text_box'>
              <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et 
                toutes les informations sont régulièrement vérifiées par nos équipes.
              </p>
            </div>
          </div>
        </details>

        <details className='details' open={isOpen.respect} onToggle={() => toggle('respect')}>
          <summary> <span>Respect</span> <img src={arrow} alt='arrow' className={`arrow2 ${isOpen.respect ? 'rotated' : ''}`} /></summary>
          <div>
            <div className='text_box'>
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation
                du voisinage entraînera une exclusion de notre plateforme.
              </p> 
            </div>
          </div>
        </details>

        <details className='details' open={isOpen.service} onToggle={() => toggle('service')}>
          <summary> <span>Service</span> <img src={arrow} alt='arrow' className={`arrow2 ${isOpen.service ? 'rotated' : ''}`} /></summary>
          <div>
            <div className='text_box'>
              <p>Nos services sont conçus pour offrir une expérience de haute qualité. Notre équipe est disponible 24/7 pour vous aider.</p>
            </div>
          </div>
        </details>

        <details className='details' open={isOpen.securite} onToggle={() => toggle('securite')}>
          <summary> <span>Sécurité</span> <img src={arrow} alt='arrow' className={`arrow2 ${isOpen.securite ? 'rotated' : ''}`} /></summary>
          <div>
            <div className='text_box'>
              <p>La sécurité est notre priorité. Nous mettons en œuvre des mesures strictes pour protéger vos données et garantir des transactions sécurisées.</p>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Info;
