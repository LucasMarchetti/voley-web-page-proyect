import React from 'react';
import './styles/AllUserCard.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/reducers/modalSlice';
const AllUserCard = () => {
    const dispatch = useDispatch();
    return (
    <div className="container-AllUserCard" onClick={() => dispatch(openModal('ModalAllUsersState'))}>
        <h3 className="subtitle-AllUserCard">Administrar</h3>
        <h1 className="title-AllUserCard">Todos los usuarios</h1>    
        </div>
    );
};


export default AllUserCard;