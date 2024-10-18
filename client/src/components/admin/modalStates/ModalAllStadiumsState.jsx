import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeStadium, updateStadium } from '../../../redux/reducers/estadiosSlice';
import './styles/ModalAllStadiumsState.css';

const ModalAllStadiumsState = () => {
  const estadios = useSelector((state) => state.estadios);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedLocation, setEditedLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false); // Estado para el mensaje de confirmación

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este estadio?')) {
      dispatch(removeStadium(id));
    }
  };

  const handleEdit = (stadium) => {
    setEditingId(stadium.id);
    setEditedName(stadium.name);
    setEditedLocation(stadium.location || '');
    setErrorMessage('');
  };

  const handleUpdate = (id) => {
    if (!editedName || !editedLocation) {
      setErrorMessage('Todos los campos son obligatorios.');
      return;
    }
    const updatedData = {
      name: editedName,
      location: editedLocation,
    };
    dispatch(updateStadium({ id, data: updatedData }));
    setEditingId(null);
    setEditedName('');
    setEditedLocation('');

    // Mostrar mensaje de confirmación por 1.5 segundos
    setIsConfirmationVisible(true);
    setTimeout(() => {
      setIsConfirmationVisible(false);
    }, 1500);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedName('');
    setEditedLocation('');
    setErrorMessage('');
  };

  return (
    <div className="modal-all-stadiums">
      <h2 className="modal-title">Administrar Estadios</h2>
      <ul className="stadiums-list">
        {estadios.map((stadium) => (
          <li key={stadium.id} className="stadium-item">
            {editingId === stadium.id ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  placeholder="Nombre del Estadio"
                  className="edit-input"
                />
                <input
                  type="text"
                  value={editedLocation}
                  onChange={(e) => setEditedLocation(e.target.value)}
                  placeholder="Ubicación de Google Maps"
                  className="edit-input"
                />
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <div className="button-group">
                  <button onClick={() => handleUpdate(stadium.id)} className="save-button">Guardar</button>
                  <button onClick={handleCancel} className="cancel-button">Cancelar</button>
                </div>
              </div>
            ) : (
              <div className="stadium-info">
                <div className="stadium-details">
                  <span className="stadium-name">{stadium.name}</span>
                  <span className="stadium-location">{stadium.location}</span>
                </div>
                <div className="button-group">
                  <button onClick={() => handleEdit(stadium)} className="edit-button">Editar</button>
                  <button onClick={() => handleDelete(stadium.id)} className="delete-button">Eliminar</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Modal de confirmación con animación */}
      {isConfirmationVisible && (
        <div className="confirmation-modal yellow">
          <h2>Estadio modificado</h2>
        </div>
      )}
    </div>
  );
};

export default ModalAllStadiumsState;
