import React from 'react';
import './styles/AllTeamsCard.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/reducers/modalSlice';

const AllTeamsCard = () => {
    const dispatch = useDispatch();
    return (
      <div className="container-AllTeamsCard" onClick={() => dispatch(openModal('ModalAllTeamsState'))}>
        <h3 className="subtitle-AllTeamsCard">Administrar</h3>
        <h1 className="title-AllTeamsCard">Todos los equipos</h1>    
        </div>
    );
  };


export default AllTeamsCard;