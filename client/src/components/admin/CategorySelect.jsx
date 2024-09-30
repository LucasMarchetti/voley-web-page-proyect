import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./styles/CategorySelect.css"

const CategorySelect = ({ selectedCategory, handleChange }) => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <div className="select-container">
      <label htmlFor="category-select">Seleccione una categoría:</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleChange}
      >
        <option value="" disabled>Selecciona...</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};




export default CategorySelect;