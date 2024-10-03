import React from 'react';
import './styles/NewUserCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';


const NewUserCard = () => {
    return (
    <div className="container-NewUserCard">
        <h3 className="subtitle-NewUserCard">Agregar</h3>
        <h1 className="title-NewUserCard">Nuevo Usuario</h1>
        <FontAwesomeIcon className="user" icon={faUser} />      
        </div>
    );
};


export default NewUserCard;