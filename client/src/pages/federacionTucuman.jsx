//Styles
import "../components/styles/federacionTucuman.css"

//components
import Contact from "../components/Contact"
import HeaderFederaciones from "../components/HeaderFederaciones"
import Torneos from "../components/torneos"
import UltimosPartidos from "../components/UltimosPartidos"
import NavBarFederaciones from "../components/NavBarFederaciones.jsx"

let Tucuman = {
    "nombre": "Federación Tucumana de Voley",
    "email": "fedevoley@tucuman.gov.ar",
    "telefono": "+54 381 465 7890",
    "direccion": "Av. Aconquija 789, San Miguel de Tucumán",
    "logo": require("../multimedia/logoTucuman.webp")
  }

export default function federacionTucuman () {

    return (
        <div>
            <NavBarFederaciones />
            <HeaderFederaciones Provincia={Tucuman} />
            <UltimosPartidos />
            <Torneos />
            <Contact  Provincia={Tucuman}/>
        </div>
    )
}
