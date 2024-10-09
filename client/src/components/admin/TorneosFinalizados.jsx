import React from 'react';
import './styles/TorneosFinalizados.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/reducers/modalSlice';
const TorneosFinalizados = () => {
    const dispatch = useDispatch();
    return (
      <div className="container-TorneosFinalizados" onClick={() => dispatch(openModal('ModalTorneosFinalizadosState'))}> 
        <h3 className="subtitle-TorneosFinalizados">Ver</h3>
        <h1 className="title-TorneosFinalizados">Torneos finalizados</h1>
      </div>
    );
  };

export default TorneosFinalizados;