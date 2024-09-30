
//styles
import "./styles/HeaderFederaciones.css"


export default function HeaderFederaciones ({ nombre }) {

    return (
        <div className="conteiner-title-federations">
            <h1 className="title-federaciones">
                {nombre}
            </h1>
        </div>
    )
}
