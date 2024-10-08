import React from 'react';
import './styles/RoundRobinCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';

const RoundRobinCard = () => {
  return (
    <div className="container-round-robin">
      <h3 className="subtitle">Nuevo torneo</h3>
      <h1 className="title">Round Robin</h1>
      <FontAwesomeIcon className="arrow" icon={faArrowRotateRight} />
    </div>
  );
};

export default RoundRobinCard;