import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Homepage from "./components/Homepage";
import PokemonDetail from "./components/PokemonDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="*" element={<>Error!</>} />
      </Routes>
    </>
  );
}

export default App;
