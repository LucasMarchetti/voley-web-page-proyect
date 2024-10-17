// src/components/ModalAllTeamsState.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTeam, updateTeam } from '../../../redux/reducers/equipos/reducer';
import './styles/ModalAllTeamsState.css';

const ModalAllTeamsState = () => {
  const teams = useSelector((state) => state.teams);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedLogo, setEditedLogo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

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
      logo: editedLogo, // Asegúrate de manejar la carga de imágenes adecuadamente
    };
    dispatch(updateTeam({ id, data: updatedData }));
    setEditingId(null);
    setEditedName('');
    setEditedLogo(null);
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

  return (
    <div className="modal-all-teams">
      <h2 className="modal-title">Administrar Equipos</h2>
      <ul className="teams-list">
        {teams.map((team) => (
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
                  <button onClick={() => handleUpdate(team.id)} className="save-button">Guardar</button>
                  <button onClick={handleCancel} className="cancel-button">Cancelar</button>
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
                  <button onClick={() => handleEdit(team)} className="edit-button">Editar</button>
                  <button onClick={() => handleDelete(team.id)} className="delete-button">Eliminar</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModalAllTeamsState;
