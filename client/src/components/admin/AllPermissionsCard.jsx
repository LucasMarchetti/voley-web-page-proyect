import React from 'react';
import './styles/AllPermissionsCard.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/reducers/modalSlice';

const AllPermissionsCard = () => {
    const dispatch = useDispatch();
    return (
      <div className="container-AllPermissionsCard" onClick={() => dispatch(openModal('ModalAllPermissionsState'))}>
        <h3 className="subtitle-AllPermissionsCard">Administrar</h3>
        <h1 className="title-AllPermissionsCard">Todos los permisos</h1>    
        </div>
    );
  };


export default AllPermissionsCard;