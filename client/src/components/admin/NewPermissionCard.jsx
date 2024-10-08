import React from 'react';
import './styles/NewPermissionCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faKey} from '@fortawesome/free-solid-svg-icons';


const NewPermissionCard = () => {
    return (
      <div className="container-NewPermissionCard">
        <h3 className="subtitle-NewPermissionCard">Agregar</h3>
        <h1 className="title-NewPermissionCard">Nuevo permiso</h1>
        <FontAwesomeIcon className="key" icon={faKey} />      
        </div>
    );
  };


export default NewPermissionCard;