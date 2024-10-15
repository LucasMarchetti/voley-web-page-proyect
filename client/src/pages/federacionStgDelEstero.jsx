import { useState } from "react";

// Components
import Contact from "../components/Contact";
import HeaderFederaciones from "../components/HeaderFederaciones";
import Torneos from "../components/torneos";
import UltimosPartidos from "../components/UltimosPartidos";
import NavBarFederaciones from "../components/NavBarFederaciones.jsx";
import TablaTorneo from "../components/TablaTorneo.jsx";
import Footer from "../components/Footer.jsx";

let SantiagodelEstero = {
    "nombre": "Federación Santiagueña de Voleiball",
    "email": "voley@santiago.gob.ar",
    "telefono": "+54 385 421 1414",
    "direccion": "Av. Belgrano Sur 910, Santiago del Estero",
    "logo": require("../multimedia/logoSantiago.webp")
}

export default function FederacionStgDelEstero() {
    const [selectedTorneo, setSelectedTorneo] = useState(null)
    const handleTorneoSeleccionado = (torneo) => {
        setSelectedTorneo(torneo);
    };

    const handleCloseTabla = () => {
        setSelectedTorneo(null);
    };

    return (
        <div>
            <NavBarFederaciones />
            <HeaderFederaciones Provincia={SantiagodelEstero} />
            <UltimosPartidos />
            <Torneos onTorneoSeleccionado={handleTorneoSeleccionado} />
            {selectedTorneo && <TablaTorneo torneo={selectedTorneo} onClose={handleCloseTabla}/>}
            <Contact Provincia={SantiagodelEstero} />
            <Footer />
        </div>
    );
}
