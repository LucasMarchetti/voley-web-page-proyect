
//components
import Contact from "../components/Contact"
import HeaderFederaciones from "../components/HeaderFederaciones"
import Torneos from "../components/torneos"
import UltimosPartidos from "../components/UltimosPartidos"
import NavBarFederaciones from "../components/NavBarFederaciones.jsx"


let SantiagodelEstero = {
    "nombre": "Federación Santiagueña de Voleiball",
    "email": "voley@santiago.gob.ar",
    "telefono": "+54 385 421 1414",
    "direccion": "Av. Belgrano Sur 910, Santiago del Estero",
    "logo": require("../multimedia/logoSantiago.webp")
  }

export default function federacionStgDelEstero () {


    return (
        <div>
            <NavBarFederaciones />
            <HeaderFederaciones Provincia={SantiagodelEstero} />
            <UltimosPartidos />
            <Torneos />
            <Contact Provincia={SantiagodelEstero}/>
        </div>
    )
}
