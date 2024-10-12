import React, { useState } from 'react';
import './styles/ModalNewStadiumState.css';

const ModalNewStadiumState = () => {
  const [stadiumName, setStadiumName] = useState('');
  const [googleMapsLocation, setGoogleMapsLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos al servidor.
    console.log('Nombre del estadio:', stadiumName);
    console.log('Ubicación de Google Maps:', googleMapsLocation);
  };

  return (
    <form className="modal-new-stadium-form" onSubmit={handleSubmit}>
      <h2 className='title-modal-new-stadium-form'>Crear Nuevo Estadio</h2>
      <div className="form-group">
        <label className='subtitle-modal-new-stadium-form' htmlFor="stadiumName">Nombre del Estadio:</label>
        <input
          type="text"
          id="stadiumName"
          value={stadiumName}
          onChange={(e) => setStadiumName(e.target.value)}
          required
        />
      </div>
      <button type="submit">Crear Estadio</button>
    </form>
  );
};

export default ModalNewStadiumState;
