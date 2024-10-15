import React from 'react';
import './styles/Modal.css'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../redux/reducers/modalSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ModalNewTeam from './modalStates/ModalNewTeamState';
import ModalNewTeamState from './modalStates/ModalNewTeamState';
import ModalNewCategoryState from './modalStates/ModalNewCategoryState';
import ModalNewStadiumState from './modalStates/ModalNewStadiumState';
import ModalRoundRobinState from './modalStates/ModalRoundRobinStateSteps/ModalRoundRobinState';
import ModalGrandPrixState from './modalStates/ModalGrandPrixStateSteps/ModalGrandPrixState';

const Modal = () => {
  const { isOpen, modalState } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const renderContent = () => {
    switch (modalState) {
      case 'ModalRoundRobinState':
        return <ModalRoundRobinState/>;
      case 'ModalGrandPrixState':
        return <ModalGrandPrixState/>
      case 'ModalPersonalizedTournamentState':
        return <h1 className='titulos-prueba'>Soy ModalPersonalizedTournamentState</h1>;
      case 'ModalTorneosFinalizadosState':
        return <h1 className='titulos-prueba'>Soy ModalTorneosFinalizadosState</h1>;
      case 'ModalTorneosProcesoState':
        return <h1 className='titulos-prueba'>Soy ModalTorneosProcesoState</h1>;
      case 'ModalTorneoProximosState':
        return <h1 className='titulos-prueba'>Soy ModalTorneoProximosState</h1>;
      case 'ModalNewTeamState':
        return <ModalNewTeamState/>;
      case 'ModalNewCategoryState':
        return <ModalNewCategoryState/>;
      case 'ModalNewStadiumState':
        return <ModalNewStadiumState/>
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
    <div className="modal show">
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