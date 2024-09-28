
//components
import NavBar from "../components/NavBar.jsx"

//styles
import "../components/Inicio.css"

//images
import logoFeva from "../multimedia/logoFEVA2.png"
import logoLRV from "../multimedia/logo-LigaRegionalNOA.png"
import logoCatamarca from "../multimedia/logoCatamarca.png"
import logoRioja from "../multimedia/logoRioja.png"
import logoSalta from "../multimedia/logoSalta.webp"
import logoSantiago from "../multimedia/logoSantiago.webp"
import logoJujuy from "../multimedia/logoJujuy2.png"
import logoTucuman from "../multimedia/logoTucuman.webp"
import imageVoley from "../multimedia/voley-mujer.webp"

export default function Inicio () {
    return (
        <div className="conteiner-inicio">
            <NavBar />
            <div className="conteiner-header">
                <h1 className="title-inicio">
                    Federaciones de Voley del NOA
                </h1>
                <div className="images-header">
                    <img 
                        src={logoFeva}
                        alt="Logo FEVA"
                        className="logo-header"
                    />
                    <img 
                        src={logoLRV}
                        alt="Logo FEVA"
                        className="logo-header"
                    />
                </div>
            </div>
            <div className="conteiner-header-images">
                <div className="conteiner-header-federaciones">

                    <div className="conteiner-sub-title">
                        <h3 className="sub-title-inicio">
                            Descrubre todo lo que ofrecen estas federaciones para el desarrollo del voleibol en sus respectivas provincias.
                        </h3>
                    </div>

                    <div className="images-header">
                        <div className="images-federaciones">
                            <img 
                                src={logoCatamarca}
                                alt="logoCatamarca"
                                className="logo-header"
                            />
                            <img 
                                src={logoRioja}
                                alt="logoRioja "
                                className="logo-header"
                            />
                            <img 
                                src={logoSalta}
                                alt="Logo logoSalta"
                                className="logo-header"
                            />
                            <img 
                                src={logoSantiago}
                                alt="Logo logoSantiago"
                                className="logo-header"
                            />
                            <img 
                                src={logoTucuman}
                                alt="Logo logoTucuman"
                                className="logo-header"
                            />
                            <img 
                                src={logoJujuy}
                                alt="Logo logoJujuy"
                                className="logo-header"
                            />                
                        </div>
                    </div>
                </div>
                <img 
                    src={imageVoley}
                    alt="img-voley"
                    className="img-header-voley"
                />
            </div>
        </div>
    )
}
