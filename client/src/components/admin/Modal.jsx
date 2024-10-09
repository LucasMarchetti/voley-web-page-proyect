import React from 'react';
import './styles/Modal.css'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../redux/reducers/modalSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const Modal = () => {
  const { isOpen, modalState } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const renderContent = () => {
    switch (modalState) {
      case 'ModalRoundRobinState':
        return <h1 className='titulos-prueba'>Soy ModalRoundRobinState</h1>;
      case 'ModalGrandPrixState':
        return <h1 className='titulos-prueba'>Soy ModalGrandPrixState</h1>;
      case 'ModalPersonalizedTournamentState':
        return <h1 className='titulos-prueba'>Soy ModalPersonalizedTournamentState</h1>;
      case 'ModalTorneosFinalizadosState':
        return <h1 className='titulos-prueba'>Soy ModalTorneosFinalizadosState</h1>;
      case 'ModalTorneosProcesoState':
        return <h1 className='titulos-prueba'>Soy ModalTorneosProcesoState</h1>;
      case 'ModalTorneoProximosState':
        return <h1 className='titulos-prueba'>Soy ModalTorneoProximosState</h1>;
      case 'ModalNewTeamState':
        return <h1 className='titulos-prueba'>Soy ModalNewTeamState</h1>;
      case 'ModalNewCategoryState':
        return <h1 className='titulos-prueba'>Soy ModalNewCategoryState</h1>;
      case 'ModalNewStadiumState':
        return <h1 className='titulos-prueba'>Soy ModalNewStadiumState</h1>;
      case 'ModalAllTeamsState':
        return <h1 className='titulos-prueba'>Soy ModalAllTeamsState</h1>;
      case 'ModalAllStadiumsState':
        return <h1 className='titulos-prueba'>Soy ModalAllStadiumsState</h1>;
      case 'ModalAllCategorysState':
        return <h1 className='titulos-prueba'>Soy ModalAllCategorysState</h1>;
      case 'ModalNewPermissionState':
        return <h1 className='titulos-prueba'>Soy ModalNewPermissionState</h1>;
      case 'ModalNewUserState':
        return <h1 className='titulos-prueba'>Soy ModalNewUserState</h1>;
      case 'ModalPersonalizedPermissionState':
        return <h1 className='titulos-prueba'>Soy ModalPersonalizedPermissionState</h1>;
      case 'ModalAllUsersState':
        return <h1 className='titulos-prueba'>Soy ModalAllUsersState</h1>;
      case 'ModalAllPermissionsState':
        return <h1 className='titulos-prueba'>Soy ModalAllPermissionsState</h1>;
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal show" onClick={() => dispatch(closeModal())}>
        <button className="modal-close-button" onClick={() => dispatch(closeModal())}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Modal;