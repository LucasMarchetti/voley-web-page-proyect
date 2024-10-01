import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//styles
import "./styles/NavBarFederaciones.css";

export default function NavBar () {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const handleNavigation = (path) => {
        navigate(path);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="conteiner-navbar-federaciones">
            <button className="btn-inicio-federaciones" onClick={() => handleNavigation("/")}>
                Inicio
            </button>
            <div className="dropdown" ref={dropdownRef}>
                <button className="btn-inicio-federaciones" onClick={toggleDropdown}>
                    Federaciones
                </button>
                {dropdownOpen && (
                    <ul className="dropdown-menu">
                        <li onClick={() => handleNavigation("/catamarca")}>Catamarca</li>
                        <li onClick={() => handleNavigation("/larioja")}>La Rioja</li>
                        <li onClick={() => handleNavigation("/jujuy")}>Jujuy</li>
                        <li onClick={() => handleNavigation("/stgdelestero")}>Santiago del Estero</li>
                        <li onClick={() => handleNavigation("/salta")}>Salta</li>
                        <li onClick={() => handleNavigation("/tucuman")}>Tucumán</li>
                    </ul>
                )}
            </div>
        </div>
    );
}
