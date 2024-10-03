import React from 'react';
import './styles/PersonalizedPermissionCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPen} from '@fortawesome/free-solid-svg-icons';

const PersonalizedPermissionCard = () => {
    return (
      <div className="container-PersonalizedPermissionCard">
        <h3 className="subtitle-PersonalizedPermissionCard">Administrar</h3>
        <h1 className="title-PersonalizedPermissionCard">Permisos de usuario</h1>
        <FontAwesomeIcon className="user-pen-icon" icon={faUserPen} />      
        </div>
    );
  };


export default PersonalizedPermissionCard;