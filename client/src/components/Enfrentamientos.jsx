
//styles
import "./styles/Enfrentamientos.css";

//images
import redstar from "../multimedia/equipos/Catamarca/RedStar.png";

const enfrentamientosData = [
    { equipo1: "RedStar", equipo2: "Estrella Azul", fecha: "24/08/24", hora: "19:00 HS", lugar: "Polideportivo Capital" },
    { equipo1: "RedStar", equipo2: "Fenix", fecha: "25/08/24", hora: "17:00 HS", lugar: "Estadio Central" },
    { equipo1: "RedStar", equipo2: "Leones", fecha: "26/08/24", hora: "18:00 HS", lugar: "Gimnasio Norte" },
    { equipo1: "RedStar", equipo2: "Tigres", fecha: "27/08/24", hora: "20:00 HS", lugar: "Cancha del Sur" },
    { equipo1: "RedStar", equipo2: "Águilas", fecha: "28/08/24", hora: "19:30 HS", lugar: "Polideportivo Capital" },
    { equipo1: "RedStar", equipo2: "Panteras", fecha: "29/08/24", hora: "21:00 HS", lugar: "Estadio Central" },
    { equipo1: "RedStar", equipo2: "Halcones", fecha: "30/08/24", hora: "16:00 HS", lugar: "Gimnasio Norte" },
];

export default function Enfrentamientos() {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className="conteiner-enfrentamientos">
                
                <div className="titles-enfrentamientos">
                    <h1>Próximos Enfrentamientos</h1>
                    <div className="titles-fechas-enfrentamientos">
                        <h3>Desde :</h3>
                        <h3>24/08/24</h3>
                        <h3> - </h3>
                        <h3>Hasta el :</h3>
                        <h3>31/08/24</h3>
                    </div>
                    <h2>Categoría:  Sub-18 Masculino</h2>
                    <h2>Torneo:  Liga Regional del NOA</h2>
                </div>
                <div>
                    {enfrentamientosData.map((enfrentamiento, index) => (
                        <div className="enfrentamiento" key={index}>
                            <div className="logos-nombres-equipos">
                                <div>
                                    <img src={redstar} alt="Logo-Equipo" className="logo-equipo-enfrentamiento" />
                                    <h2>{enfrentamiento.equipo1}</h2>
                                </div>
                                <h2> VS </h2>
                                <div>
                                    <img src={redstar} alt="Logo-Equipo" className="logo-equipo-enfrentamiento" />
                                    <h2>{enfrentamiento.equipo2}</h2>
                                </div>
                            </div>
                            <h2>{enfrentamiento.fecha}</h2>
                            <h2>{enfrentamiento.hora}</h2>
                            <h2>{enfrentamiento.lugar}</h2>
                        </div>
                    ))}
                </div>
            </div>            
        </div>
    );
}
