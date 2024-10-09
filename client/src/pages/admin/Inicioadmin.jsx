import CategorySelect from "../../components/admin/CategorySelect";
import Sidebar from "../../components/admin/Sidebar";
import Box from "../../components/admin/Box";
import React, { useState, useEffect } from "react";

import "./styles.css";

export default function InicioAdmin() {
    const [activeTab, setActiveTab] = useState("torneos"); // Estado inicial
    const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 }); // Estado para la posición del fondo

    useEffect(() => {
        const handleMouseMove = (e) => {
            const xOffset = (e.clientX / window.innerWidth) * 70; // Calcula el desplazamiento X
            const yOffset = (e.clientY / window.innerHeight) * 70; // Calcula el desplazamiento Y
            setBackgroundPosition({ x: xOffset, y: yOffset }); // Actualiza la posición del fondo
        };

        const animateBackground = () => {
            const background = document.querySelector('.background-admin');
            if (background) {
                // Aplica el movimiento en ambas direcciones
                background.style.backgroundPosition = `${backgroundPosition.x}% ${backgroundPosition.y}%`;
            }
            requestAnimationFrame(animateBackground); // Solicita el siguiente cuadro
        };

        // Agregar el event listener al montar el componente
        document.addEventListener('mousemove', handleMouseMove);

        // Comienza la animación
        requestAnimationFrame(animateBackground);

        // Limpia el event listener y la animación al desmontar el componente
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [backgroundPosition]); // El efecto se ejecuta cuando cambia la posición del fondo

    return (
        <div className="inicio-admin">
            <div className="background-admin"></div>
            <div className="overlay"></div> {/* Este es el nuevo div de superposición */}
            <div className="admin-page">
                <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
                <Box activeTab={activeTab} />
            </div>
        </div>
    );
}
