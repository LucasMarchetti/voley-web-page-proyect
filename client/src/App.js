
//React Routes
import { Route, Routes } from "react-router-dom"

//styles
import "./App.css"

//pages
import Inicio from "./pages/Inicio"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Inicio />} />
    </Routes>
  )
}

export default App;
