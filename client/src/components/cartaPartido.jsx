
//styles
import "./styles/cartaPartidos.css"

export default function CartaPartido ({ Equipo1, Equipo2, Partido}) {

    return (
        <div className="conteiner-cartaPartido">
            <h1 className="title-cartaPartido">
                {Partido.fecha.dia}, {Partido.fecha.fecha} {Partido.fecha.mes}
            </h1>
            <h2 className="title-cartaPartido2">
                {Partido.lugar}
            </h2>
            <div className="conteiner-equipos">
                <div className="conteiner-equipo">
                    <img
                        src={Equipo1.image}
                        alt="Logo Equipo 1"
                        className="logo-equipo"
                    />
                    <h3 className="title-nombre-equipo">{Equipo1.nombre}</h3>
                </div>
                <p>VS</p>
                <div className="conteiner-equipo">
                    <img
                        src={Equipo2.image}
                        alt="Logo Equipo 2"
                        className="logo-equipo"
                    />
                    <h3 className="title-nombre-equipo">{Equipo2.nombre}</h3>
                </div>
            </div>
            <div className="sets-partido">
                <h1 className="sets">{Partido.sets_local}</h1>
                <p>-</p>
                <h1 className="sets">{Partido.sets_visitante}</h1>
            </div>
        </div>
    )
}