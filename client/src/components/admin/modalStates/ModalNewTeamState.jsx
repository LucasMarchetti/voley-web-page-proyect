// src/components/ModalNewTeamState.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTeam } from '../../../redux/reducers/equipos/reducer';
import './styles/ModalNewTeamState.css';
import { v4 as uuidv4 } from 'uuid';

const ModalNewTeamState = () => {
  const [teamName, setTeamName] = useState('');
  const [teamLogo, setTeamLogo] = useState(null);
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTeam = {
      id: uuidv4(),
      name: teamName,
      logo: teamLogo, // Manejo simplificado; en producción, manejar la carga de imágenes adecuadamente
    };
    dispatch(addTeam(newTeam));
    setTeamName('');
    setTeamLogo(null);
    setSuccessMessage('Equipo creado exitosamente.');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleLogoChange = (e) => {
    setTeamLogo(e.target.files[0]);
  };

  return (
    <form className="modal-new-team-form" onSubmit={handleSubmit}>
      <h2 className='title-modal-new-team-form'>Crear Nuevo Equipo</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <div className="form-group">
        <label className='subtitle-modal-new-team-form' htmlFor="teamName">Nombre del Equipo:</label>
        <input
          type="text"
          id="teamName"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Ingrese el nombre del equipo"
          required
        />
      </div>
      <div className="form-group">
        <label className='subtitle-modal-new-team-form' htmlFor="teamLogo">Logo del Equipo:</label>
        <input
          type="file"
          id="teamLogo"
          accept="image/*"
          onChange={handleLogoChange}
          required
          className="file-input"
        />
      </div>
      <button type="submit" className="submit-button">Crear Equipo</button>
    </form>
  );
};

export default ModalNewTeamState;
