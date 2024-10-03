import React from 'react';
import './styles/NewStadiumCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faVolleyball} from '@fortawesome/free-solid-svg-icons';

const NewStadiumCard = () => {
    return (
      <div className="container-NewStadiumCard">
        <h3 className="subtitle-NewStadiumCard">Agregar</h3>
        <h1 className="title-NewStadiumCard">Nuevo estadio</h1>
        <FontAwesomeIcon className="voleyball" icon={faVolleyball} />      
        </div>
    );
  };


export default NewStadiumCard;