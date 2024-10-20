import React, { useState, useEffect } from 'react';
import './styles/Modal.css';
import ReactModal from 'react-modal';

import { useSelector, useDispatch } from 'react-redux';
import { closeModal, resetModalState } from '../../redux/reducers/modalSlice'; // Importa resetModalState
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ModalNewTeamState from './modalStates/ModalNewTeamState';
import ModalNewCategoryState from './modalStates/ModalNewCategoryState';
import ModalAllCategoriesState from './modalStates/ModalAllCategoriesState';
import ModalAllStadiumsState from './modalStates/ModalAllStadiumsState';
import ModalAllTeamsState from './modalStates/ModalAllTeamsState';
import ModalNewStadiumState from './modalStates/ModalNewStadiumState';
import ModalRoundRobinState from './modalStates/ModalRoundRobinStateSteps/ModalRoundRobinState';
import ModalGrandPrixState from './modalStates/ModalGrandPrixStateSteps/ModalGrandPrixState';
import ModalTournamentsInProcessState from './modalStates/ModalTournamentsInProcessState';

ReactModal.setAppElement('#root');

const Modal = () => {
  const { isOpen, modalState } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  // Estados locales para controlar el renderizado y el estado del modal
  const [shouldRenderContent, setShouldRenderContent] = useState(false);
  const [currentModalState, setCurrentModalState] = useState(modalState);

  useEffect(() => {
    if (isOpen) {
      setShouldRenderContent(true);
      setCurrentModalState(modalState); // Guardamos el modalState actual
    }
  }, [isOpen, modalState]);

  const afterClose = () => {
    // Se llama después de que la animación de cierre ha terminado
    setShouldRenderContent(false);
    setCurrentModalState(null); // Restablecemos el modalState local
    dispatch(resetModalState()); // Restablecemos modalState en el store
  };

  const renderContent = () => {
    if (!shouldRenderContent) return null;

    switch (currentModalState) { // Usamos el modalState local
      case 'ModalRoundRobinState':
        return <ModalRoundRobinState shouldRenderContent={shouldRenderContent} currentModalState={currentModalState}/>;
      case 'ModalGrandPrixState':
        return <ModalGrandPrixState shouldRenderContent={shouldRenderContent} currentModalState={currentModalState}/>;
      case 'ModalPersonalizedTournamentState':
        return <h1 className='titulos-prueba'>Soy ModalPersonalizedTournamentState</h1>;
      case 'ModalTorneosFinalizadosState':
        return <h1 className='titulos-prueba'>Soy ModalTorneosFinalizadosState</h1>;
      case 'ModalTournamentsInProcessState':
        return <ModalTournamentsInProcessState/>
      case 'ModalTorneoProximosState':
        return <h1 className='titulos-prueba'>Soy ModalTorneoProximosState</h1>;
      case 'ModalNewTeamState':
        return <ModalNewTeamState />;
      case 'ModalNewCategoryState':
        return <ModalNewCategoryState />;
      case 'ModalNewStadiumState':
        return <ModalNewStadiumState />;
      case 'ModalAllTeamsState':
        return <ModalAllTeamsState />;
      case 'ModalAllStadiumsState':
        return <ModalAllStadiumsState />;
      case 'ModalAllCategorysState':
        return <ModalAllCategoriesState />;
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

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => dispatch(closeModal())}
      onAfterClose={afterClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      closeTimeoutMS={400} // Asegúrate de que coincide con la duración de la animación de cierre
    >
      <button className="modal-close-button" onClick={() => dispatch(closeModal())}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      {renderContent()}
    </ReactModal>
  );
};

export default Modal;