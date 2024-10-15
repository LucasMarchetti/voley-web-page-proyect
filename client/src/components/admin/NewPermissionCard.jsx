import React from 'react';
import './styles/NewPermissionCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faKey} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/reducers/modalSlice';

const NewPermissionCard = () => {
    const dispatch = useDispatch();
    return (
      <div className="container-NewPermissionCard" onClick={() => dispatch(openModal('ModalNewPermissionState'))}>
        <h3 className="subtitle-NewPermissionCard">Agregar</h3>
        <h1 className="title-NewPermissionCard">Nuevo permiso</h1>
        <FontAwesomeIcon className="key" icon={faKey} />      
        </div>
    );
  };


export default NewPermissionCard;