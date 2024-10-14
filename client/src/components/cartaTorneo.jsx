
//styles
import "./styles/cartaTorneo.css";

export default function CartaTorneo ({ onClick, categoria, torneo, Provincia }) {
    
    return (
        <div className="conteiner-carta-torneo" onClick={onClick}>
            <div className="conteiner-titles-torneo">
                <h1>{categoria}</h1>
                <h3>{torneo.nombre_torneo}</h3>
                <div className="conteiner-logo-fechas">
                    <img 
                        src={Provincia} 
                        alt={`Logo de ${torneo.nombre_torneo}`}
                        className="cartaTorneo-logo"
                    />
                    <div className="conteiner-logo-fechas-p">
                        <p>{torneo.fecha_inicio.toLocaleDateString()}</p>
                        <p> - </p>
                        <p>{torneo.fecha_final.toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
