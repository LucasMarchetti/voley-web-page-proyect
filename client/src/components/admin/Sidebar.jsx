import React, { useState } from 'react';
import './styles/Sidebar.css';
import { FaTrophy, FaCogs, FaUserShield, FaSignOutAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Sidebar = ({ setActiveTab, activeTab }) => {
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
        <h2 className="sidebar-title">Administración</h2>
      </div>

      <div className="menu-buttons">
        <button
          className={`sidebar-btn ${activeTab === "torneos" ? "active" : ""}`}
          onClick={() => setActiveTab("torneos")}
        >
          <FaTrophy className="icon" />
          <span>Torneos</span>
        </button>
        <button
          className={`sidebar-btn ${activeTab === "gestion" ? "active" : ""}`}
          onClick={() => setActiveTab("gestion")}
        >
          <FaCogs className="icon" />
          <span>Gestión</span>
        </button>
        <button
          className={`sidebar-btn ${activeTab === "permisos" ? "active" : ""}`}
          onClick={() => setActiveTab("permisos")}
        >
          <FaUserShield className="icon" />
          <span>Permisos</span>
        </button>
      </div>

      <div className="profile-section">
        <img
          src="https://via.placeholder.com/50"
          alt="Imagen de perfil"
          className="profile-pic"
        />
        <p className="profile-name">Nombre de usuario</p>
        <button className="logout-btn">
          <FaSignOutAlt className="icon" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;