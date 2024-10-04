
//styles
import "./styles/HeaderFederaciones.css"

export default function HeaderFederaciones ({Provincia}) {

    return (
        <div className="navbarStyle">
            <h1 className="title-federaciones">
                {Provincia.nombre}
            </h1>
        </div>
    )
}
