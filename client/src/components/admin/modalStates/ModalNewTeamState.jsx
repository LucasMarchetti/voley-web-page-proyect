import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTeam } from '../../../redux/reducers/equiposSlice';
import './styles/ModalNewTeamState.css';
import { v4 as uuidv4 } from 'uuid';

const ModalNewTeamState = () => {
  const [teamName, setTeamName] = useState('');
  const [teamLogo, setTeamLogo] = useState(null);
  const dispatch = useDispatch();
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false); // Estado para mostrar el modal de confirmación

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

    // Mostrar el modal de confirmación por 1.5 segundos (coincide con la duración de la animación)
    setIsConfirmationVisible(true);
    setTimeout(() => {
      setIsConfirmationVisible(false);
    }, 1500); // Ajustado a 1.5 segundos
  };

  const handleLogoChange = (e) => {
    setTeamLogo(e.target.files[0]);
  };

  return (
    <div>
      <form className="modal-new-team-form" onSubmit={handleSubmit}>
        <h2 className="title-modal-new-team-form">Crear Nuevo Equipo</h2>
        <div className="form-group">
          <label className="subtitle-modal-new-team-form" htmlFor="teamName">
            Nombre del Equipo:
          </label>
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
          <label className="subtitle-modal-new-team-form" htmlFor="teamLogo">
            Logo del Equipo:
          </label>
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

      {/* Modal de confirmación con animación tipo "pop" */}
      {isConfirmationVisible && (
        <div className="confirmation-modal">
          <h2>EQUIPO AGREGADO</h2>
        </div>
      )}
    </div>
  );
};

export default ModalNewTeamState;
