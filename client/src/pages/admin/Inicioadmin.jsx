import { useSelector } from 'react-redux';
import Sidebar from "../../components/admin/Sidebar";
import Box from "../../components/admin/Box";
import Modal from '../../components/admin/Modal';
import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function InicioAdmin() {
    const [activeTab, setActiveTab] = useState("torneos");
    const isOpen = useSelector((state) => state.modal.isOpen);
    const backgroundRef = useRef(null);

    useEffect(() => {
        const background = backgroundRef.current;
        let xOffset = 0;
        let yOffset = 0;
        let rafId;

        const handleMouseMove = (e) => {
            if (isOpen) return; // Desactivar cuando el modal está abierto
            xOffset = (e.clientX / window.innerWidth) * 70;
            yOffset = (e.clientY / window.innerHeight) * 70;
        };

        const updateBackgroundPosition = () => {
            if (background) {
                background.style.backgroundPosition = `${xOffset}% ${yOffset}%`;
            }
            rafId = requestAnimationFrame(updateBackgroundPosition);
        };

        document.addEventListener('mousemove', handleMouseMove);
        rafId = requestAnimationFrame(updateBackgroundPosition);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, [isOpen]);

    return (
        <div className="inicio-admin">
            <div className={`background-admin ${isOpen ? 'blurred' : ''}`} ref={backgroundRef}></div>
            <div className="admin-page">
                <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
                {!isOpen && <Box activeTab={activeTab} />}
                <Modal />
            </div>
        </div>
    );
}
