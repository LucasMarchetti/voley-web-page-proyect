
//components
import NavBarFederaciones from "../components/NavBarFederaciones.jsx"
import HeaderFederaciones from "../components/HeaderFederaciones.jsx"
import UltimosPartidos from "../components/UltimosPartidos.jsx"
import Torneos from "../components/torneos.jsx"
import Contact from "../components/Contact.jsx"

let Catamarca = {
    "nombre": "Federación Catamarqueña de Voleiball",
    "email": "contacto@catamarcavoley.com",
    "telefono": "+54 383 445 1234",
    "direccion": "Av. Gobernador Galíndez 123, San Fernando del Valle de Catamarca",
    "logo": require("../multimedia/logoCatamarca.png")
  }


export default function federacionCatamarca () {

    return (
        <div>
            <NavBarFederaciones />
            <HeaderFederaciones Provincia={Catamarca}/>
            <UltimosPartidos />
            <Torneos />
            <Contact Provincia={Catamarca}/>
        </div>
    )
}
