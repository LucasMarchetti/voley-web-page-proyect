import React from 'react';
import './styles/TorneosProximos.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/reducers/modalSlice';
const TorneosProximos = () => {
    const dispatch = useDispatch();
    return (
    <div className="container-TorneosProximos" onClick={() => dispatch(openModal('ModalTorneosProximosState'))}>
        <h3 className="subtitle-TorneosProximos">Administrar</h3>
        <h1 className="title-TorneosProximos">Proximos Torneos</h1>
        </div>
    );
};


export default TorneosProximos;