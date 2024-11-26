import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importar el Router y las rutas
import { Home } from "./pages/Home"; // Tu página Home
import { Hifu } from "./components/ServiciosPages/Hifu"; // Página para el servicio Hifu
import { Dermapen } from "./components/ServiciosPages/Dermapen"; // Página para el servicio Dermapen
import { Plasma } from "./components/ServiciosPages/Plasma"; // Página para el servicio Plasma
import { Criolipolisis } from "./components/ServiciosPages/Criolipolisis"; // Página para Criolipolisis
import { MaxMuscle } from "./components/ServiciosPages/MaxMuscle"; // Página para Max Muscle
import { Biosueros } from "./components/ServiciosPages/Biosueros"; // Página para Biosueros
import { Tensamax } from "./components/ServiciosPages/Tensamax"; // Página para Tensamax
import { Colonterapia } from "./components/ServiciosPages/Colonterapia"; // Página para Colonterapia
import { Drenajes } from "./components/ServiciosPages/Drenajes"; // Página para Drenajes

export default function App() {
  return (
    <Router>
      {/* Aquí se definirán las rutas */}
      <div className="w-[100%] flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta para la página principal */}
          <Route path="/hifu-7d" element={<Hifu />} /> {/* Ruta para la página de Hifu */}
          <Route path="/dermapen" element={<Dermapen />} /> {/* Ruta para Dermapen */}
          <Route path="/plasma" element={<Plasma />} /> {/* Ruta para Plasma */}
          <Route path="/criolipolisis" element={<Criolipolisis />} /> {/* Ruta para Criolipolisis */}
          <Route path="/max-muscle" element={<MaxMuscle />} /> {/* Ruta para Max Muscle */}
          <Route path="/biosueros" element={<Biosueros />} /> {/* Ruta para Biosueros */}
          <Route path="/tensamax" element={<Tensamax />} /> {/* Ruta para Tensamax */}
          <Route path="/colonterapia" element={<Colonterapia />} /> {/* Ruta para Colonterapia */}
          <Route path="/drenajes" element={<Drenajes />} /> {/* Ruta para Drenajes */}
        </Routes>
      </div>

    </Router>
  );
}
