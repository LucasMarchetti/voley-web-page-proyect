
//Styles
import "../components/styles/federacionCatamarca.css"

//components
import NavBarFederaciones from "../components/NavBarFederaciones.jsx"
import HeaderFederaciones from "../components/HeaderFederaciones.jsx"
import UltimosPartidos from "../components/UltimosPartidos.jsx"


export default function federacionCatamarca () {


    return (
        <div>
            <NavBarFederaciones />
            <HeaderFederaciones nombre="Federación Catamarqueña de Voley"/>
            <UltimosPartidos />
        </div>
    )
}



