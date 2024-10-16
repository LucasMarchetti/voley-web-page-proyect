import { useState } from "react";

// Components
import NavBarFederaciones from "../components/NavBarFederaciones.jsx";
import HeaderFederaciones from "../components/HeaderFederaciones.jsx";
import UltimosPartidos from "../components/UltimosPartidos.jsx";
import Torneos from "../components/torneos.jsx";
import Contact from "../components/Contact.jsx";
import TablaTorneo from "../components/TablaTorneo.jsx"
import Footer from "../components/Footer.jsx";

let Jujuy = {
    "nombre": "Federación Jujeña de Voleiball",
    "email": "contacto@jujuyvoley.org",
    "telefono": "+54 388 423 2121",
    "direccion": "Calle Lavalle 324, San Salvador de Jujuy",
    "logo": require("../multimedia/logoJujuy3.png")
}

export default function FederacionJujuy() {
    const [selectedTorneo, setSelectedTorneo] = useState(null);

    const handleTorneoSeleccionado = (torneo) => {
        setSelectedTorneo(torneo);
    };

    const handleCloseTabla = () => {
        setSelectedTorneo(null)
    };

    return (
        <div>
            <NavBarFederaciones />
            <HeaderFederaciones Provincia={Jujuy} />
            <UltimosPartidos />
            
            <Torneos onTorneoSeleccionado={handleTorneoSeleccionado} />

            {selectedTorneo && (
                <TablaTorneo torneo={selectedTorneo} onClose={handleCloseTabla} /> 
            )}
            <Contact Provincia={Jujuy} />
            <Footer />
        </div>
    );
}
