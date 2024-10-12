import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/reducers/modalSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import './styles/RoundRobinCard.css';

const RoundRobinCard = () => {
  const dispatch = useDispatch();

  return (
    <div className="container-round-robin" onClick={() => dispatch(openModal('ModalRoundRobinState'))}>
      <h3 className="subtitle">Nuevo torneo</h3>
      <h1 className="title">Round Robin</h1>
      <FontAwesomeIcon className="arrow" icon={faArrowRotateRight} />
    </div>
  );
};

export default RoundRobinCard;
