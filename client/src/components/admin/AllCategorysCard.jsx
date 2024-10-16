import React from 'react';
import './styles/AllCategorysCard.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/reducers/modalSlice';

const AllCategorysCard = () => {
    const dispatch = useDispatch();
    return (
      <div className="container-AllCategorysCard" onClick={() => dispatch(openModal('ModalAllCategorysState'))}>
        <h3 className="subtitle-AllCategorysCard">Administrar</h3>
        <h1 className="title-AllCategorysCard">Todas las categorias</h1>    
        </div>
    );
  };
  
export default AllCategorysCard;