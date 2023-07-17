import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PokemonDetails from "./PokemonDetails";

function AppRoutes() {
    return(
        <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Pokemon/:name" element={<PokemonDetails />} />
    </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes