
//Components
import CartaPartido from "./cartaPartido.jsx"

//styles
import "./styles/UltimosPartidos.css"

import redstar from "../multimedia/equipos/Catamarca/RedStar.png"

const Partido = {
    fecha: {
        dia: 22,
        mes: "Junio",
    },
    lugar: "Polideportido Capital",
    sets_local: 3,
    sets_visitante: 1
}

const Equipo1 = {
    nombre: "RedStar",
    image: redstar,
    nombre_abreviacion: "R.S"
}

const Equipo2 = {
    nombre: "Ateneo",
    image: redstar,
    nombre_abreviacion: "Ate"
}

export default function UltimosPartidos() {
    return (
      <div className="conteiner-ultimos-partidos">
        <div className="conteiner-title-btns">
            <div>
                <h1 className="title-ultimos-partidos">A1 Masculinos</h1>
                <h1 className="title-ultimos-partidos2">Torneo Profesional</h1>
            </div>
          <div className="conteiner-btns-ultimos">
            <button className="btn-ultimos">Torneos</button>
            <button className="btn-ultimos">Categoría</button>
          </div>
        </div>
        <div className="conteiner-cartas">
          <CartaPartido Partido={Partido} Equipo1={Equipo1} Equipo2={Equipo2} />
          <CartaPartido Partido={Partido} Equipo1={Equipo1} Equipo2={Equipo2} />
          <CartaPartido Partido={Partido} Equipo1={Equipo1} Equipo2={Equipo2} />
          <CartaPartido Partido={Partido} Equipo1={Equipo1} Equipo2={Equipo2} />
          <CartaPartido Partido={Partido} Equipo1={Equipo1} Equipo2={Equipo2} />
        </div>
      </div>
    );
  }
  
