import React from 'react';
import './styles/AllStadiumsCard.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/reducers/modalSlice';

const AllStadiumsCard = () => {
    const dispatch = useDispatch();
    return (
      <div className="container-AllStadiumsCard" onClick={() => dispatch(openModal('ModalAllStadiumsState'))}>
        <h3 className="subtitle-AllStadiumsCard">Administrar</h3>
        <h1 className="title-AllStadiumsCard">Todos los estadios</h1>
        </div>
    );
  };


export default AllStadiumsCard;