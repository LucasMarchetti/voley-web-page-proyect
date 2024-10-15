import React from 'react';
import './styles/GrandPrixCard.css'; // Importa el archivo de estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/reducers/modalSlice';
const GrandPrixCard = () => {
    const dispatch = useDispatch();
    return (
    <div className="container-GrandPrixCard" onClick={() => dispatch(openModal('ModalGrandPrixState'))}>
        <h3 className="subtitle">Nuevo torneo</h3>
        <h1 className="title">Grand Prix</h1>
        <FontAwesomeIcon className="trophy" icon={faTrophy} />
    </div>
    );
};

export default GrandPrixCard;