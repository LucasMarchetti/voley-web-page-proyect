import React from 'react';
import './styles/NewUserCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/reducers/modalSlice';

const NewUserCard = () => {
    const dispatch = useDispatch();
    return (
    <div className="container-NewUserCard" onClick={() => dispatch(openModal('ModalNewUserState'))}>
        <h3 className="subtitle-NewUserCard">Agregar</h3>
        <h1 className="title-NewUserCard">Nuevo Usuario</h1>
        <FontAwesomeIcon className="user" icon={faUser} />      
        </div>
    );
};


export default NewUserCard;