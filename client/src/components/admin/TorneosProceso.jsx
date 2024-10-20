import React from 'react';
import './styles/TorneosProceso.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/reducers/modalSlice';
const TorneosProceso = () => {
    const dispatch = useDispatch();
    return (
    <div className="container-TorneosProceso" onClick={() => dispatch(openModal('ModalTournamentsInProcessState'))}>
        <h3 className="subtitle-TorneosProceso">Administrar </h3>
        <h1 className="title-TorneosProceso">Torneos en proceso</h1>
        </div>
    );
};


export default TorneosProceso;