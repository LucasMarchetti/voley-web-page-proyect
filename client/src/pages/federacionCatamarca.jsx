import { useState } from "react"

// Components
import NavBarFederaciones from "../components/NavBarFederaciones.jsx"
import HeaderFederaciones from "../components/HeaderFederaciones.jsx"
import UltimosPartidos from "../components/UltimosPartidos.jsx"
import Torneos from "../components/torneos.jsx"
import Contact from "../components/Contact.jsx"
import TablaTorneo from "../components/TablaTorneo.jsx"
import Footer from "../components/Footer.jsx"

let Catamarca = {
    "nombre": "Federación Catamarqueña de Voleiball",
    "email": "contacto@catamarcavoley.com",
    "telefono": "+54 383 445 1234",
    "direccion": "Av. Gobernador Galíndez 123, San Fernando del Valle de Catamarca",
    "logo": require("../multimedia/logoCatamarca.png")
}

export default function FederacionCatamarca() {
    const [selectedTorneo, setSelectedTorneo] = useState(null)

    const handleTorneoSeleccionado = (torneo) => {
        setSelectedTorneo(torneo)
    }

    const handleCloseTabla = () => {
        setSelectedTorneo(null)
    }

    return (
        <div>
            <NavBarFederaciones />
            <HeaderFederaciones Provincia={Catamarca} />
            <UltimosPartidos />
            <Torneos onTorneoSeleccionado={handleTorneoSeleccionado} Provincia={Catamarca.logo}/>
            
            {selectedTorneo && <TablaTorneo torneo={selectedTorneo} onClose={handleCloseTabla} />}
            <Contact Provincia={Catamarca} />
            <Footer />
        </div>
    )
}
