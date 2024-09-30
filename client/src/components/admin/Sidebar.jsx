import React, { useState } from 'react';
import './styles/Sidebar.css';
import { FaTrophy, FaCogs, FaUserShield, FaSignOutAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="header">
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
        </button>
        {isOpen && <h2 className="sidebar-title">Administración</h2>}
      </div>

      <div className="sidebar-content">
        <div className="menu-buttons">
          <button className="sidebar-btn">
            <FaTrophy className="icon" />
            {isOpen && <span>Torneos</span>}
          </button>
          <button className="sidebar-btn">
            <FaCogs className="icon" />
            {isOpen && <span>Gestión</span>}
          </button>
          <button className="sidebar-btn">
            <FaUserShield className="icon" />
            {isOpen && <span>Permisos</span>}
          </button>
        </div>

        {/* Sección de perfil y logout */}
        <div className="profile-section">
          <div className="profile-info">
            <img
              src="https://via.placeholder.com/50"
              alt="Imagen de perfil"
              className="profile-pic"
            />
            {isOpen && <p className="profile-name">Nombre de usuario</p>}
          </div>
          <button className="logout-btn">
            <FaSignOutAlt className="icon" />
            {isOpen && <span>Log Out</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
