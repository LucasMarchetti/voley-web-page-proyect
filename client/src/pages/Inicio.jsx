//React-Router
import { useNavigate } from "react-router-dom"

//components
import NavBar from "../components/NavBar.jsx"
import SShapeComponent from "../components/SShapeComponent.jsx"

//styles
import "../components/styles/Inicio.css"

//images
import logoFeva from "../multimedia/logoFEVA2.png"
import logoLRV from "../multimedia/logo-LigaRegionalNOA.png"
import logoCatamarca from "../multimedia/logoCatamarca.png"
import logoRioja from "../multimedia/logoRioja.png"
import logoSalta from "../multimedia/logoSalta.webp"
import logoSantiago from "../multimedia/logoSantiago.webp"
import logoJujuy from "../multimedia/logoJujuy2.png"
import logoTucuman from "../multimedia/logoTucuman.webp"

export default function Inicio() {

    const navigate = useNavigate()

    const handleNavigation = (path) => {
        navigate(path)
    }

    return (
        <div className="conteiner-inicio">
            <NavBar />
            <SShapeComponent/>
            
            <div className="conteiner-header">
                <h1 className="title-inicio">
                    Federaciones de Voley del NOA
                </h1>
                <div className="images-header">
                    <img
                        src={logoLRV}
                        alt="Logo LRV"
                        className="logo-headerLiga"
                    />
                    <img
                        src={logoFeva}
                        alt="Logo FEVA"
                        className="logo-headerLiga"
                    />
                </div>
            </div>
            <div className="conteiner-header-images">
                <div className="conteiner-header-federaciones">

                    <div className="conteiner-sub-title">
                        <h3 className="sub-title-inicio">
                            Explora los torneos y partidos organizados por estas federaciones para impulsar el voleibol en sus provincias.
                        </h3>
                    </div>

                    <div className="images-header">
                        <div className="images-federaciones">
                            {/* Catamarca */}
                            <div 
                             className="logo-container"
                             onClick={() => handleNavigation("/catamarca")}
                             >
                                <img
                                    src={logoCatamarca}
                                    alt="logoCatamarca"
                                    className="logo-header"
                                />
                                <div className="tooltip">Federación Catamarca</div>
                            </div>
                            {/* La Rioja */}
                            <div 
                             className="logo-container"
                             onClick={() => handleNavigation("/larioja")}
                             >
                                <img
                                    src={logoRioja}
                                    alt="logoRioja"
                                    className="logo-header"
                                />
                                <div className="tooltip">Federación La Rioja</div>
                            </div>
                            {/* Salta */}
                            <div 
                             className="logo-container"
                             onClick={() => handleNavigation("/salta")}
                             >
                                <img
                                    src={logoSalta}
                                    alt="logoSalta"
                                    className="logo-header"
                                />
                                <div className="tooltip">Federación Salta</div>
                            </div>
                            {/* Santiago del Estero */}
                            <div 
                             className="logo-container"
                             onClick={() => handleNavigation("/stgdelestero")}
                             >
                                <img
                                    src={logoSantiago}
                                    alt="logoSantiago"
                                    className="logo-header"
                                />
                                <div className="tooltip">Federación Santiago del Estero</div>
                            </div>
                            {/* Tucumán */}
                            <div 
                             className="logo-container"
                             onClick={() => handleNavigation("/tucuman")}
                             >
                                <img
                                    src={logoTucuman}
                                    alt="logoTucuman"
                                    className="logo-header"
                                />
                                <div className="tooltip">Federación Tucumán</div>
                            </div>
                            {/* Jujuy */}
                            <div 
                             className="logo-container"
                             onClick={() => handleNavigation("/jujuy")}
                             >
                                <img
                                    src={logoJujuy}
                                    alt="logoJujuy"
                                    className="logo-header"
                                />
                                <div className="tooltip">Federación Jujuy</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
