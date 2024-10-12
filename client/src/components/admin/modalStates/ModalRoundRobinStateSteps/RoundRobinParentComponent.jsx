import React, { useState } from 'react';
import ModalRoundRobinState from './ModalRoundRobinState';

const RoundRobinParentComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleModalOpen}>Crear Torneo</button>
      {showModal && (
        <ModalRoundRobinState onClose={handleModalClose} show={showModal} />
      )}
    </div>
  );
};

export default RoundRobinParentComponent;
