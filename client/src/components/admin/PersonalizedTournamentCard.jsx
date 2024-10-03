import React from 'react';
import './styles/PersonalizedTournamentCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGear} from '@fortawesome/free-solid-svg-icons';

const PersonalizedTournamentCard = () => {
    return (
      <div className="container-PersonalizedTournamentCard">
        <h3 className="subtitle-PersonalizedTournamentCard">Crear nuevo</h3>
        <h1 className="title-PersonalizedTournamentCard">Torneo Personalizado</h1>
        <FontAwesomeIcon className="gear" icon={faGear} />      
        </div>
    );
  };


export default PersonalizedTournamentCard;