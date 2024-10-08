import React from 'react';
import './styles/NewCategoryCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';


const NewCategoryCard = () => {
    return (
      <div className="container-NewCategoryCard">
        <h3 className="subtitle-NewCategoryCard">Agregar</h3>
        <h1 className="title-NewCategoryCard">Nueva categoria</h1>
        <FontAwesomeIcon className="list-icon" icon={faList} />      
        </div>
    );
  };


export default NewCategoryCard;