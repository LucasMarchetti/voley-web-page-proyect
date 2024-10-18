import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTeam, updateTeam } from '../../../redux/reducers/equiposSlice';
import './styles/ModalAllTeamsState.css';

const ModalAllTeamsState = () => {
  const equipos = useSelector((state) => state.equipos);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedLogo, setEditedLogo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false); // Estado para el mensaje de confirmación
  const confirmationRef = useRef(null); // Referencia al modal de confirmación

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este equipo?')) {
      dispatch(removeTeam(id));
    }
  };

  const handleEdit = (team) => {
    setEditingId(team.id);
    setEditedName(team.name);
    setEditedLogo(team.logo || null);
    setErrorMessage('');
  };

  const handleUpdate = (id) => {
    if (!editedName) {
      setErrorMessage('El nombre del equipo es obligatorio.');
      return;
    }
    const updatedData = {
      name: editedName,
      logo: editedLogo,
    };
    dispatch(updateTeam({ id, data: updatedData }));
    setEditingId(null);
    setEditedName('');
    setEditedLogo(null);

    // Mostrar mensaje de confirmación por 1.5 segundos
    setIsConfirmationVisible(true);
    setTimeout(() => {
      setIsConfirmationVisible(false);
    }, 1500);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedName('');
    setEditedLogo(null);
    setErrorMessage('');
  };

  const handleLogoChange = (e) => {
    setEditedLogo(e.target.files[0]);
  };

  // Mantener el modal centrado y seguir el scroll
  useEffect(() => {
    const updateModalPosition = () => {
      if (confirmationRef.current) {
        const scrollY = window.scrollY || window.pageYOffset;
        confirmationRef.current.style.top = `${scrollY + window.innerHeight / 2}px`;
      }
    };

    if (isConfirmationVisible) {
      updateModalPosition(); // Inicialmente posicionamos el modal
      window.addEventListener('scroll', updateModalPosition); // Actualizamos la posición con el scroll
    }

    return () => {
      window.removeEventListener('scroll', updateModalPosition);
    };
  }, [isConfirmationVisible]);

  return (
    <div className="modal-all-teams">
      <h2 className="modal-title">Administrar Equipos</h2>
      <ul className="teams-list">
        {equipos && equipos.length > 0 ? (
          equipos.map((team) => (
            <li key={team.id} className="team-item">
              {editingId === team.id ? (
                <div className="edit-form">
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    placeholder="Nombre del Equipo"
                    className="edit-input"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="edit-input"
                  />
                  {errorMessage && <div className="error-message">{errorMessage}</div>}
                  <div className="button-group">
                    <button onClick={() => handleUpdate(team.id)} className="save-button">
                      Guardar
                    </button>
                    <button onClick={handleCancel} className="cancel-button">
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <div className="team-info">
                  <div className="team-details">
                    <span className="team-name">{team.name}</span>
                    {team.logo && (
                      <img
                        src={URL.createObjectURL(team.logo)}
                        alt={`${team.name} Logo`}
                        className="team-logo"
                      />
                    )}
                  </div>
                  <div className="button-group">
                    <button onClick={() => handleEdit(team)} className="edit-button">
                      Editar
                    </button>
                    <button onClick={() => handleDelete(team.id)} className="delete-button">
                      Eliminar
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))
        ) : (
          <li>No hay equipos disponibles.</li>
        )}
      </ul>

      {isConfirmationVisible && (
        <div
          ref={confirmationRef} // Referencia para manipular dinámicamente su posición
          className="confirmation-modal yellow"
          style={{ position: 'fixed', left: '50%', transform: 'translate(-50%, -50%)' }} // Fijamos el modal en la pantalla
        >
          <h2>Equipo modificado</h2>
        </div>
      )}
    </div>
  );
};

export default ModalAllTeamsState;