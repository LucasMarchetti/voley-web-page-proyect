import './styles/TablaTorneo.css'

export default function TablaTorneo({ torneo, onClose }) {

    return (
        <div className="tabla-torneo-contenedor">
            <h2>{torneo.nombre_torneo}</h2>
            <table className="tabla-resultados">
                <thead>
                    <tr className='titles-tabla-resultados'>
                        <th>Equipo</th>
                        <th>Partidos Jugados</th>
                        <th>Puntos</th>
                        <th>Set Ganados</th>
                        <th>Set Perdidos</th>
                        <th>Posición</th>
                    </tr>
                </thead>
                <tbody className='sub-titles-tabla-resultados'>
                    <tr>
                        <td>Equipo 1</td>
                        <td>30</td>
                        <td>1</td>
                        <td>13</td>
                        <td>12</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Equipo 2</td>
                        <td>25</td>
                        <td>2</td>
                        <td>23</td>
                        <td>22</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Equipo 3</td>
                        <td>20</td>
                        <td>3</td>
                        <td>33</td>
                        <td>32</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={onClose} className="btn-cerrar-resultados">
                Cerrar Tabla de Resultados
            </button>
        </div>
    )
}
 