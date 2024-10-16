import React, { useState } from 'react';
import './styles/ModalNewCategoryState.css';

const ModalNewCategoryState = () => {
  const [categoryName, setCategoryName] = useState('');
  const [abbreviation, setAbbreviation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos al servidor.
    console.log('Nombre de la categoría:', categoryName);
    console.log('Abreviación:', abbreviation);
  };

  return (
    <form className="modal-new-category-form" onSubmit={handleSubmit}>
      <h2 className='title-modal-new-category-form'>Crear Nueva Categoría</h2>
      <div className="form-group">
        <label className='subtitle-modal-new-category-form' htmlFor="categoryName">Nombre de la Categoría:</label>
        <input
          type="text"
          id="categoryName"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
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
          required
        />
      </div>
      <button type="submit">Crear Categoría</button>
    </form>
  );
};

export default ModalNewCategoryState;
