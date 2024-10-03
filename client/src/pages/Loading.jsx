
//React
import React from "react";

//styles
import "../components/styles/Loading.css"; 


export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-p">Cargando...</p>
    </div>
  );
}