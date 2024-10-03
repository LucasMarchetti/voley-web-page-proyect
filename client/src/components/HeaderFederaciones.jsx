
//styles
import "./styles/HeaderFederaciones.css"
import portadaImage from "../multimedia/portada-voley.jpg"

export default function HeaderFederaciones ({ nombre }) {

    const navbarStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${portadaImage})`,
        backgroundSize: 'cover',
        justifyContent: 'center',
        backgroundPosition: 'center',
        margin: '0',
        width: '100%',
        height: '200px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        webkitBoxShadow: '0px 20px 31px 0px rgba(153,153,153,1)',
        mozBoxShadow: '0px 20px 31px 0px rgba(153,153,153,1)',
        boxShadow: '0px 20px 31px 0px rgba(153,153,153,1)',
        letterSpacing: '2px'
    };
    

    return (
        <div style={navbarStyle}>
            <h1 className="title-federaciones">
                {nombre}
            </h1>
        </div>
    )
}
