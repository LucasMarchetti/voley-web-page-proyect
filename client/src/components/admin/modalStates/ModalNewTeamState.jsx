import React, { useState } from 'react';
import './styles/ModalNewTeamState.css';

const ModalNewTeamState = () => {
  const [teamName, setTeamName] = useState('');
  const [teamLogo, setTeamLogo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos al servidor.
    console.log('Nombre del equipo:', teamName);
    console.log('Logo del equipo:', teamLogo);
  };

  const handleLogoChange = (e) => {
    setTeamLogo(e.target.files[0]);
  };

  return (
    <form className="modal-new-team-form" onSubmit={handleSubmit}>
      <h2 className='title-modal-new-team-form'>Crear Nuevo Equipo</h2>
      <div className="form-group">
        <label className='subtitle-modal-new-team-form' htmlFor="teamName">Nombre del Equipo:</label>
        <input
          type="text"
          id="teamName"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
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
        />
      </div>
      <button type="submit">Crear Equipo</button>
    </form>
  );
};

export default ModalNewTeamState;