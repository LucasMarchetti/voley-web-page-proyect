import { useState } from "react";

// Components
import Contact from "../components/Contact";
import HeaderFederaciones from "../components/HeaderFederaciones";
import Torneos from "../components/torneos";
import UltimosPartidos from "../components/UltimosPartidos";
import NavBarFederaciones from "../components/NavBarFederaciones.jsx";
import TablaTorneo from "../components/TablaTorneo.jsx"

let Tucuman = {
    "nombre": "Federación Tucumana de Voleiball",
    "email": "fedevoley@tucuman.gov.ar",
    "telefono": "+54 381 465 7890",
    "direccion": "Av. Aconquija 789, San Miguel de Tucumán",
    "logo": require("../multimedia/logoTucuman.webp")
}

export default function FederacionTucuman() {
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
            <HeaderFederaciones Provincia={Tucuman} />
            <UltimosPartidos />
            <Torneos onTorneoSeleccionado={handleTorneoSeleccionado} />
            {selectedTorneo && <TablaTorneo torneo={selectedTorneo} onClose={handleCloseTabla}/>}
            <Contact Provincia={Tucuman} />
        </div>
    );
}
