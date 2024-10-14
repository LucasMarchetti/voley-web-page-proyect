import { useSelector } from 'react-redux';
import Sidebar from "../../components/admin/Sidebar";
import Box from "../../components/admin/Box";
import Modal from '../../components/admin/Modal'; // Importamos el Modal que configuramos
import React, { useState, useEffect } from "react";
import "./styles.css";

export default function InicioAdmin() {
    const [activeTab, setActiveTab] = useState("torneos"); // Estado inicial para la pestaña activa
    const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 }); // Estado para la posición del fondo
    const isOpen = useSelector((state) => state.modal.isOpen); // Obtenemos el estado del modal desde Redux

    useEffect(() => {
        const handleMouseMove = (e) => {
            const xOffset = (e.clientX / window.innerWidth) * 70; // Calcula el desplazamiento X
            const yOffset = (e.clientY / window.innerHeight) * 70; // Calcula el desplazamiento Y
            setBackgroundPosition({ x: xOffset, y: yOffset }); // Actualiza la posición del fondo
        };

        const background = document.querySelector('.background-admin');
        const animateBackground = () => {
            if (background) {
                // Aplica el movimiento en ambas direcciones
                background.style.backgroundPosition = `${backgroundPosition.x}% ${backgroundPosition.y}%`;
            }
        };

        // Agregar el event listener al montar el componente
        document.addEventListener('mousemove', handleMouseMove);

        // Ejecuta la animación cuando cambia la posición del fondo
        requestAnimationFrame(animateBackground);

        // Limpia el event listener al desmontar el componente
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [backgroundPosition]); // El efecto se ejecuta cuando cambia la posición del fondo

    return (
        <div className="inicio-admin">
            <div className="background-admin"></div>
            <div className="admin-page">
                <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
                {/* Si el modal está abierto, ocultamos el Box */}
                {!isOpen && <Box activeTab={activeTab} />}
                
                {/* Aquí renderizamos el Modal, siempre estará disponible pero controlado por el estado isOpen */}
                <Modal />
            </div>
        </div>
    );
}