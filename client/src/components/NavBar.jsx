
//React-router
import { useNavigate } from 'react-router-dom';


//Styles
import "./NavBar.css"

export default function NavBar () {

    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate("/")
    }

    return (
        <div className="conteiner-navbar">
            <button className="btn-inicio" onClick={handleNavigation}>
                Inicio
            </button>
        </div>
    )
}