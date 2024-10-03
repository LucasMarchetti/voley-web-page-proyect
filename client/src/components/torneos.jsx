
//styles
import "./styles/torneos.css"

//components
import CartaTorneo from "./cartaTorneo"

export default function Torneos () {

    return (
        <div className="conteiner-torneos">
            <div className="conteiner-titles-torneos">
                <h3 className="sub-title-torneos">Próximos</h3>
                <div className="conteiner-titles-btn">
                    <h1 className="title-torneos">TORNEOS</h1>
                    <button className="btn-torneos">Categorías</button>
                </div>
            </div>
            <div className="conteiner-cartas-torneo">
                <CartaTorneo />
                <CartaTorneo />
                <CartaTorneo />
                <CartaTorneo />
                <CartaTorneo />
            </div>

        </div>
    )
}
