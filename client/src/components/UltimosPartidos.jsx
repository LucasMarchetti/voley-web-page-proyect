// React
import React, { useState, useRef } from "react";

// styles
import "./styles/UltimosPartidos.css";
import redstar from "../multimedia/equipos/Catamarca/RedStar.png";

//Components
import CartaPartido from "./cartaPartido.jsx";

const PartidoMasculino = {
  fecha: {
    dia: "Viernes",
    fecha: 22,
    mes: "Junio",
  },
  lugar: "Polideportido Capital",
  sets_local: 3,
  sets_visitante: 1,
};

const PartidoFemenino = {
  fecha: {
    dia: "Sábado",
    fecha: 23,
    mes: "Junio",
  },
  lugar: "Polideportido Capital",
  sets_local: 2,
  sets_visitante: 3,
};

const Equipo1 = {
  nombre: "RedStar",
  image: redstar,
  nombre_abreviacion: "R.S",
};

const Equipo2 = {
  nombre: "Ateneo",
  image: redstar,
  nombre_abreviacion: "Ate",
};

export default function UltimosPartidos() {
  const [activo, setActivo] = useState("masculino");
  const carruselRef = useRef(null);

  const scrollLeft = () => {
    if (carruselRef.current) {
      const width = carruselRef.current.offsetWidth;
      carruselRef.current.scrollBy({ left: -width, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carruselRef.current) {
      const width = carruselRef.current.offsetWidth;
      carruselRef.current.scrollBy({ left: width, behavior: "smooth" });
    }
  };

  return (
    <div className="conteiner-ultimos-partidos">
      <div className="conteiner-title-btns">
        <div>
          <div style={{ display: "flex", width: "550px" }}>
            <h1
              className={`title-ultimos-partidos ${activo === "masculino" ? "activo" : ""}`}
              onClick={() => setActivo("masculino")}
            >
              A1 Masculino
            </h1>
            <h1
              className={`title-ultimos-partidos ${activo === "femenino" ? "activo" : ""}`}
              onClick={() => setActivo("femenino")}
            >
              A1 Femenino
            </h1>
          </div>
          <h1 className="title-ultimos-partidos2">Torneo Profesional</h1>
        </div>
      </div>
      
      <button className="carousel-btn carousel-btn-left" onClick={scrollLeft}>{"<"}</button>
      <button className="carousel-btn carousel-btn-right" onClick={scrollRight}>{">"}</button>

      <div className="conteiner-cartas" ref={carruselRef}>
        {activo === "masculino" ? (
          <>
            <CartaPartido Partido={PartidoMasculino} Equipo1={Equipo1} Equipo2={Equipo2} />
            <CartaPartido Partido={PartidoMasculino} Equipo1={Equipo1} Equipo2={Equipo2} />
            <CartaPartido Partido={PartidoMasculino} Equipo1={Equipo1} Equipo2={Equipo2} />
            <CartaPartido Partido={PartidoMasculino} Equipo1={Equipo1} Equipo2={Equipo2} />
            <CartaPartido Partido={PartidoMasculino} Equipo1={Equipo1} Equipo2={Equipo2} />
          </>
        ) : (
          <>
            <CartaPartido Partido={PartidoFemenino} Equipo1={Equipo1} Equipo2={Equipo2} />
            <CartaPartido Partido={PartidoFemenino} Equipo1={Equipo1} Equipo2={Equipo2} />
            <CartaPartido Partido={PartidoFemenino} Equipo1={Equipo1} Equipo2={Equipo2} />
            <CartaPartido Partido={PartidoFemenino} Equipo1={Equipo1} Equipo2={Equipo2} />
            <CartaPartido Partido={PartidoFemenino} Equipo1={Equipo1} Equipo2={Equipo2} />
          </>
        )}
      </div>
    </div>
  );
}
