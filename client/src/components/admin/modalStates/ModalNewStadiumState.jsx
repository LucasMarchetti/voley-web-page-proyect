// src/components/ModalNewStadiumState.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStadium } from '../../../redux/reducers/estadios/reducer';
import './styles/ModalNewStadiumState.css';
import { v4 as uuidv4 } from 'uuid';

const ModalNewStadiumState = () => {
  const [stadiumName, setStadiumName] = useState('');
  const [googleMapsLocation, setGoogleMapsLocation] = useState('');
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStadium = {
      id: uuidv4(),
      name: stadiumName,
      location: googleMapsLocation,
    };
    dispatch(addStadium(newStadium));
    setStadiumName('');
    setGoogleMapsLocation('');
    setSuccessMessage('Estadio creado exitosamente.');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <form className="modal-new-stadium-form" onSubmit={handleSubmit}>
      <h2 className='title-modal-new-stadium-form'>Crear Nuevo Estadio</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <div className="form-group">
        <label className='subtitle-modal-new-stadium-form' htmlFor="stadiumName">Nombre del Estadio:</label>
        <input
          type="text"
          id="stadiumName"
          value={stadiumName}
          onChange={(e) => setStadiumName(e.target.value)}
          placeholder="Ingrese el nombre del estadio"
          required
        />
      </div>
      <div className="form-group">
        <label className='subtitle-modal-new-stadium-form' htmlFor="googleMapsLocation">Ubicación de Google Maps:</label>
        <input
          type="text"
          id="googleMapsLocation"
          value={googleMapsLocation}
          onChange={(e) => setGoogleMapsLocation(e.target.value)}
          placeholder="Ingrese la ubicación de Google Maps"
          required
        />
      </div>
      <button type="submit" className="submit-button">Crear Estadio</button>
    </form>
  );
};

export default ModalNewStadiumState;
