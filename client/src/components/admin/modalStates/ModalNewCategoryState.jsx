// src/components/ModalNewCategoryState.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../../redux/reducers/categorias/reducer';
import './styles/ModalNewCategoryState.css';
import { v4 as uuidv4 } from 'uuid'; // Asegúrate de instalar uuid: npm install uuid

const ModalNewCategoryState = () => {
  const [categoryName, setCategoryName] = useState('');
  const [abbreviation, setAbbreviation] = useState('');
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      id: uuidv4(),
      name: `${categoryName}-${abbreviation}`,
    };
    dispatch(addCategory(newCategory));
    setCategoryName('');
    setAbbreviation('');
    setSuccessMessage('Categoría creada exitosamente.');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <form className="modal-new-category-form" onSubmit={handleSubmit}>
      <h2 className='title-modal-new-category-form'>Crear Nueva Categoría</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <div className="form-group">
        <label className='subtitle-modal-new-category-form' htmlFor="categoryName">Nombre de la Categoría:</label>
        <input
          type="text"
          id="categoryName"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Ingrese el nombre de la categoría"
          required
        />
      </div>
      <div className="form-group">
        <label className='subtitle-modal-new-category-form' htmlFor="abbreviation">Abreviación:</label>
        <input
          type="text"
          id="abbreviation"
          value={abbreviation}
          onChange={(e) => setAbbreviation(e.target.value)}
          placeholder="Ingrese la abreviación"
          required
        />
      </div>
      <button type="submit" className="submit-button">Crear Categoría</button>
    </form>
  );
};

export default ModalNewCategoryState;