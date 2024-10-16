import { useState } from "react";

// Components
import Contact from "../components/Contact";
import HeaderFederaciones from "../components/HeaderFederaciones";
import Torneos from "../components/torneos";
import UltimosPartidos from "../components/UltimosPartidos";
import NavBarFederaciones from "../components/NavBarFederaciones.jsx";
import TablaTorneo from "../components/TablaTorneo.jsx"
import Footer from "../components/Footer.jsx";

let LaRioja = {
    "nombre": "Federación Riojana de Voleiball",
    "email": "contacto@voleylarioja.com",
    "telefono": "+54 380 432 1010",
    "direccion": "Calle Pelagio B. Luna 678, La Rioja Capital",
    "logo": require("../multimedia/logoRioja.png")
}

export default function FederacionLaRioja() {
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
            <HeaderFederaciones Provincia={LaRioja} />
            <UltimosPartidos />
            <Torneos onTorneoSeleccionado={handleTorneoSeleccionado} />
            {selectedTorneo && <TablaTorneo torneo={selectedTorneo} onClose={handleCloseTabla}  />}
            <Contact Provincia={LaRioja} />
            <Footer />
        </div>
    );
}
