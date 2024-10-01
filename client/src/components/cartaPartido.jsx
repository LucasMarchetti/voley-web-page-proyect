
//styles
import "./styles/cartaPartidos.css"

export default function CartaPartido ({ Equipo1, Equipo2, Partido}) {

    return (
        <div className="conteiner-cartaPartido">
            <div className="conteiner-fecha-lugar">
                <h1 className="title-cartaPartido">
                    {Partido.fecha.dia} {Partido.fecha.mes}
                </h1>
                <h2 className="title-cartaPartido">
                    {Partido.lugar}
                </h2>
            </div>
            <div className="conteiner-logos-equipos">
                <img
                    src={Equipo1.image}
                    alt="Logo Equipo 1"
                    className="logo-equipo"
                />
                <p>VS</p>
                <img
                    src={Equipo2.image}
                    alt="Logo Equipo 2"
                    className="logo-equipo"
                />
            </div>
            <div className="sets-partido">
                <h1 className="sets">{Partido.sets_local}</h1>
                <p>-</p>
                <h1 className="sets">{Partido.sets_visitante}</h1>
            </div>
        </div>
    )
}