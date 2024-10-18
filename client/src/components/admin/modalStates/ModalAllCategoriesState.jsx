import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCategory, updateCategory } from '../../../redux/reducers/categoriasSlice';
import './styles/ModalAllCategoriesState.css';

const ModalAllCategoriesState = () => {
  const categorias = useSelector((state) => state.categorias);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedAbbreviation, setEditedAbbreviation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false); // Estado para el mensaje de confirmación

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta categoría?')) {
      dispatch(removeCategory(id));
    }
  };

  const handleEdit = (category) => {
    setEditingId(category.id);
    const [name, abbreviation] = category.name.split('-');
    setEditedName(name);
    setEditedAbbreviation(abbreviation);
    setErrorMessage('');
    setIsModalOpen(true); // Abre el modal
  };

  const handleUpdate = () => {
    if (!editedName || !editedAbbreviation) {
      setErrorMessage('Todos los campos son obligatorios.');
      return;
    }
    const updatedData = {
      name: `${editedName}-${editedAbbreviation}`,
    };
    dispatch(updateCategory({ id: editingId, data: updatedData }));
    setEditingId(null);
    setEditedName('');
    setEditedAbbreviation('');
    setIsModalOpen(false); // Cierra el modal

    // Mostrar mensaje de confirmación por 1.5 segundos
    setIsConfirmationVisible(true);
    setTimeout(() => {
      setIsConfirmationVisible(false);
    }, 1500);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedName('');
    setEditedAbbreviation('');
    setErrorMessage('');
    setIsModalOpen(false); // Cierra el modal
  };

  return (
    <div className="modal-all-categories">
      <h2 className="modal-title">Administrar Categorías</h2>
      <ul className="categories-list">
        {categorias.map((category) => (
          <li key={category.id} className="category-item">
            <div className="category-info">
              <span className="category-name">{category.name}</span>
              <div className="button-group">
                <button onClick={() => handleEdit(category)} className="edit-button">Editar</button>
                <button onClick={() => handleDelete(category.id)} className="delete-button">Eliminar</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Editar Categoría</h3>
            <div className="form-group">
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                placeholder="Nombre"
                className="edit-input"
              />
              <input
                type="text"
                value={editedAbbreviation}
                onChange={(e) => setEditedAbbreviation(e.target.value)}
                placeholder="Abreviación"
                className="edit-input"
              />
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              <div className="button-group">
                <button onClick={handleUpdate} className="save-button">Guardar</button>
                <button onClick={handleCancel} className="cancel-button">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de confirmación con animación */}
      {isConfirmationVisible && (
        <div className="confirmation-modal yellow">
          <h2>Categoría modificada</h2>
        </div>
      )}
    </div>
  );
};

export default ModalAllCategoriesState;