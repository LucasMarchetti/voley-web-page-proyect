//React-router
import { useNavigate } from 'react-router-dom';


//Styles
import "./styles/NavBarFederaciones.css"

export default function NavBar () {

    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate("/")
    }

    return (
        <div className="conteiner-navbar-federaciones">
            <button className="btn-inicio-federaciones" onClick={handleNavigation}>
                Inicio
            </button>
            <button className="btn-inicio-federaciones" onClick={handleNavigation}>
                Federaciones
            </button>
        </div>
    )
}