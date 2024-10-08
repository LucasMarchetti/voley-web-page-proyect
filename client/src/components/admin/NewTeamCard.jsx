import React from 'react';
import './styles/NewTeamCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPeopleGroup} from '@fortawesome/free-solid-svg-icons';


const NewTeamCard = () => {
    return (
      <div className="container-NewTeamCard">
        <h3 className="subtitle-NewTeamCard">Agregar</h3>
        <h1 className="title-NewTeamCard">Nuevo equipo</h1>
        <FontAwesomeIcon className="people-group" icon={faPeopleGroup} />      
        </div>
    );
  };


export default NewTeamCard;