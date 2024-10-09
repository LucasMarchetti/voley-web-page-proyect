
//components
import Contact from "../components/Contact"
import HeaderFederaciones from "../components/HeaderFederaciones"
import Torneos from "../components/torneos"
import UltimosPartidos from "../components/UltimosPartidos"
import NavBarFederaciones from "../components/NavBarFederaciones.jsx"


let Jujuy = {
      "nombre": "Federación Jujeña de Voleiball",
      "email": "contacto@jujuyvoley.org",
      "telefono": "+54 388 423 2121",
      "direccion": "Calle Lavalle 324, San Salvador de Jujuy",
      "logo": require("../multimedia/logoJujuy3.png")
    }

export default function federacionJujuy () {


    return (
        <div>
            <NavBarFederaciones />
            <HeaderFederaciones Provincia={Jujuy} />
            <UltimosPartidos />
            <Torneos />
            <Contact Provincia={Jujuy}/>
        </div>
    )
}
