import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import PokemonDetails from "./PokemonDetails";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes