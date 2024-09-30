
//React Routes
import { Route, Routes } from "react-router-dom"

//styles
import "./App.css"

//pages
import Inicio from "./pages/Inicio"
import LaRioja from "./pages/federacionLaRioja.jsx"
import Catamarca from "./pages/federacionCatamarca.jsx"
import Jujuy from "./pages/federacionJujuy.jsx"
import Tucuman from "./pages/federacionTucuman.jsx"
import Salta from "./pages/federacionSalta.jsx"
import StgDelEstero from "./pages/federacionStgDelEstero.jsx"
import InicioAdmin from "./pages/admin/Inicioadmin.jsx"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Inicio />} />
      <Route exact path="/catamarca" element={<Catamarca />} />
      <Route exact path="/larioja" element={<LaRioja />} />
      <Route exact path="/salta" element={<Salta />} />
      <Route exact path="/tucuman" element={<Tucuman />} />
      <Route exact path="/jujuy" element={<Jujuy />} />
      <Route exact path="/stgdelestero" element={<StgDelEstero />} />
      <Route exact path="/inicioadmin" element={<InicioAdmin />} />
    </Routes>
  )
}

export default App;
