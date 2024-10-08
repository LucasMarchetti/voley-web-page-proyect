
//Styles
import "./styles/Contact.css"


export default function Contact ({Provincia}) {
    return (
        <div className="conteiner-contact">
            <div className="conteiner-contact-info">
                <h1>Contáctenos</h1>
                <h3>¿ Tiene alguna pregunta ? No dude en ponerse en contacto con nosotros.</h3>
                <div>
                    <h3 className="contact-info-title">Email</h3>
                    <p className="contact-info-title2">{Provincia.email}</p>
                </div>
                <div>
                    <h3 className="contact-info-title">Teléfono</h3>
                    <p className="contact-info-title2">{Provincia.telefono}</p>
                </div>
                <div>
                    <h3 className="contact-info-title">Dirección</h3>
                    <p className="contact-info-title2">{Provincia.direccion}</p>
                </div>
            </div>
            <div className="conteiner-contact-image">
                <img 
                    src={Provincia.logo}
                    alt="Logo Federación"
                    className="logo-federacion-contact"
                />
            </div>
        </div>
    )
}