import { useState, useRef, useEffect } from 'react';
import './styles/torneos.css';

//components
import CartaTorneo from "./cartaTorneo";

export default function Torneos() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleCategoryClick = (category) => {
        console.log('Categoría seleccionada:', category);
        setDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const categories = ['Sub-18', 'Sub-21', 'Primera'];

    return (
        <div className="conteiner-torneos">
            <div className="conteiner-titles-torneos">
                <div>
                    <h1 className="title-torneos">TORNEOS</h1>
                    <h2 className="sub-title-torneos">En curso</h2>
                </div>
                <div className="conteiner-titles-btn">
                    <p className="btn-torneos-p">Selecciona una categoría y un torneo para poder ver los próximos partidos</p>
                    <div className="dropdown-torneos" ref={dropdownRef}>
                        <button className="btn-torneos" onClick={toggleDropdown}>
                            Categorías
                        </button>
                        {dropdownOpen && (
                            <ul className="dropdown-menu-torneos">
                                {categories.map((category, index) => (
                                    <li key={index} onClick={() => handleCategoryClick(category)}>
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className="conteiner-cartas-torneo">
                <CartaTorneo />
                <CartaTorneo />
                <CartaTorneo />
                <CartaTorneo />
                <CartaTorneo />
            </div>
        </div>
    );
}
