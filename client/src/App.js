import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

//styles
import "./App.css";

//loading component
import Loading from "./pages/Loading.jsx";

// Lazy load pages
const Inicio = lazy(() => import("./pages/Inicio"));
const LaRioja = lazy(() => import("./pages/federacionLaRioja.jsx"));
const Catamarca = lazy(() => import("./pages/federacionCatamarca.jsx"));
const Jujuy = lazy(() => import("./pages/federacionJujuy.jsx"));
const Tucuman = lazy(() => import("./pages/federacionTucuman.jsx"));
const Salta = lazy(() => import("./pages/federacionSalta.jsx"));
const StgDelEstero = lazy(() => import("./pages/federacionStgDelEstero.jsx"));
const InicioAdmin = lazy(() => import("./pages/admin/Inicioadmin.jsx"));

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading ? ( 
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      )}
    </>
  );
}

export default App;
