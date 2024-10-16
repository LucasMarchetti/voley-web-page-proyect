
//REact
import { useState, useRef, useEffect } from 'react'

//Styles
import './styles/torneos.css'

//components
import CartaTorneo from "./cartaTorneo.jsx"

export default function Torneos({ onTorneoSeleccionado, Provincia }) { 

    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('Sub-18')
    const dropdownRef = useRef(null)

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }

    const handleCategoryClick = (category) => {
        console.log('Categoría seleccionada:', category)
        setSelectedCategory(category)
        setDropdownOpen(false)
    }

    const handleTorneoClick = (torneo) => {
        onTorneoSeleccionado(torneo)
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const categories = ['Sub-18', 'Sub-21', 'A1-Masculino'];

    const torneos = [
        {
            nombre_torneo: "Torneo Apertura",
            fecha_inicio: new Date("2024-03-01"),
            fecha_final: new Date("2024-05-31"),
            id_federacion: 1,
            logo: "logo_federacion_1.png"
        },
        {
            nombre_torneo: "Torneo Clausura",
            fecha_inicio: new Date("2024-06-01"),
            fecha_final: new Date("2024-08-31"),
            id_federacion: 1,
            logo: "logo_federacion_1.png"
        },
        {
            nombre_torneo: "Copa de Campeones",
            fecha_inicio: new Date("2024-09-01"),
            fecha_final: new Date("2024-10-31"),
            id_federacion: 2,
            logo: "logo_federacion_2.png"
        },
        {
            nombre_torneo: "Torneo Regional",
            fecha_inicio: new Date("2024-11-01"),
            fecha_final: new Date("2024-12-15"),
            id_federacion: 3, 
            logo: "logo_federacion_3.png"
        }
    ]
    
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
                                    <li
                                        key={index}
                                        onClick={() => handleCategoryClick(category)}
                                    >
                                    {category}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {selectedCategory && (
                        <p className="categoria-seleccionada">
                            Categoría seleccionada: {selectedCategory}
                        </p>
                    )}
                </div>
            </div>
            <div className="conteiner-cartas-torneo">
                {
                    torneos.map((torneo, index) => (
                        <CartaTorneo 
                            key={index} 
                            onClick={() => handleTorneoClick(torneo)} 
                            categoria={selectedCategory} 
                            torneo={torneo}
                            Provincia={Provincia}
                        />
                    ))
                }
            </div>
        </div>
    )
}
