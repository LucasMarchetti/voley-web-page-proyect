import { useState } from "react";

// Components
import Contact from "../components/Contact";
import HeaderFederaciones from "../components/HeaderFederaciones";
import Torneos from "../components/torneos";
import UltimosPartidos from "../components/UltimosPartidos";
import NavBarFederaciones from "../components/NavBarFederaciones.jsx";
import TablaTorneo from "../components/TablaTorneo.jsx"

let Salta = {
    "nombre": "Federación Salteña de Voleiball",
    "email": "info@saltavoley.org",
    "telefono": "+54 387 422 5678",
    "direccion": "Calle Buenos Aires 456, Salta Capital",
    "logo": require("../multimedia/logoSalta.webp")
}

export default function FederacionSalta() {
    const [selectedTorneo, setSelectedTorneo] = useState(null)

    const handleTorneoSeleccionado = (torneo) => {
        setSelectedTorneo(torneo);
    };

    const handleCloseTabla = () => {
        setSelectedTorneo(null)
    };

    return (
        <div>
            <NavBarFederaciones />
            <HeaderFederaciones Provincia={Salta} />
            <UltimosPartidos />
            <Torneos onTorneoSeleccionado={handleTorneoSeleccionado} />
            {selectedTorneo && <TablaTorneo torneo={selectedTorneo} onClose={handleCloseTabla}  />}
            <Contact Provincia={Salta} />
        </div>
    );
}
