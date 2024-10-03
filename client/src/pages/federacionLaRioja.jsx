//Styles
import "../components/styles/federacionLaRioja.css"

//components
import Contact from "../components/Contact"
import HeaderFederaciones from "../components/HeaderFederaciones"
import Torneos from "../components/torneos"
import UltimosPartidos from "../components/UltimosPartidos"
import NavBarFederaciones from "../components/NavBarFederaciones.jsx"

let LaRioja = {
    "nombre": "Federación Riojana de Voley",
    "email": "contacto@voleylarioja.com",
    "telefono": "+54 380 432 1010",
    "direccion": "Calle Pelagio B. Luna 678, La Rioja Capital",
    "logo": require("../multimedia/logoRioja.png")
  }

export default function federacionLaRioja () {


    return (
        <div>
            <NavBarFederaciones />
            <HeaderFederaciones Provincia={LaRioja} />
            <UltimosPartidos />
            <Torneos />
            <Contact Provincia={LaRioja}/>
        </div>
    )
}
