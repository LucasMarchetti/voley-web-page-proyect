
//components
import Contact from "../components/Contact"
import HeaderFederaciones from "../components/HeaderFederaciones"
import Torneos from "../components/torneos"
import UltimosPartidos from "../components/UltimosPartidos"
import NavBarFederaciones from "../components/NavBarFederaciones.jsx"

let Salta = {
    "nombre": "Federación Salteña de Voleiball",
    "email": "info@saltavoley.org",
    "telefono": "+54 387 422 5678",
    "direccion": "Calle Buenos Aires 456, Salta Capital",
    "logo": require("../multimedia/logoSalta.webp")
  }
export default function federacionSalta () {


    return (
        <div>
            <NavBarFederaciones />
            <HeaderFederaciones Provincia={Salta} />
            <UltimosPartidos />
            <Torneos />
            <Contact Provincia={Salta} />
        </div>
    )
}
