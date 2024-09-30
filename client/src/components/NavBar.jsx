import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "./styles/NavBar.css";

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/");
    };

    return (
        <div className={`conteiner-navbar ${isScrolled ? 'scrolled' : ''}`}>
            <button className="btn-inicio" onClick={handleNavigation}>
                Inicio
            </button>
            <button className="btn-inicio" onClick={handleNavigation}>
                Inicio
            </button>
        </div>
    );
}
