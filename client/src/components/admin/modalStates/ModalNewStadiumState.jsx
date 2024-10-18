import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStadium } from '../../../redux/reducers/estadiosSlice';
import './styles/ModalNewStadiumState.css';
import { v4 as uuidv4 } from 'uuid';

const ModalNewStadiumState = () => {
  const [stadiumName, setStadiumName] = useState('');
  const [googleMapsLocation, setGoogleMapsLocation] = useState('');
  const dispatch = useDispatch();
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false); // Estado para mostrar el modal de confirmación

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

    // Mostrar el modal de confirmación por 1.5 segundos (coincide con la duración de la animación)
    setIsConfirmationVisible(true);
    setTimeout(() => {
      setIsConfirmationVisible(false);
    }, 1500); // Ajustado a 1.5 segundos
  };

  return (
    <div>
      <form className="modal-new-stadium-form" onSubmit={handleSubmit}>
        <h2 className="title-modal-new-stadium-form">Crear Nuevo Estadio</h2>
        <div className="form-group">
          <label className="subtitle-modal-new-stadium-form" htmlFor="stadiumName">
            Nombre del Estadio:
          </label>
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
          <label className="subtitle-modal-new-stadium-form" htmlFor="googleMapsLocation">
            Ubicación de Google Maps:
          </label>
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

      {/* Modal de confirmación con animación tipo "pop" */}
      {isConfirmationVisible && (
        <div className="confirmation-modal">
          <h2>ESTADIO AGREGADO</h2>
        </div>
      )}
    </div>
  );
};

export default ModalNewStadiumState;
