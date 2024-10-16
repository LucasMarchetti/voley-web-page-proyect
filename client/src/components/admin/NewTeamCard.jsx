import React from 'react';
import './styles/NewTeamCard.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/reducers/modalSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPeopleGroup} from '@fortawesome/free-solid-svg-icons';


const NewTeamCard = () => {
    const dispatch = useDispatch();
    return (
      <div className="container-NewTeamCard" onClick={() => dispatch(openModal('ModalNewTeamState'))}>
        <h3 className="subtitle-NewTeamCard">Agregar</h3>
        <h1 className="title-NewTeamCard">Nuevo equipo</h1>
        <FontAwesomeIcon className="people-group" icon={faPeopleGroup} />      
        </div>
    );
  };


export default NewTeamCard;