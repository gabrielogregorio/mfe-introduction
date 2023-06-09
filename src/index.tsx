import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/aboutMe";
import { Games } from "./pages/games";
import Componente from "./pages/introduction";
import { Galeria } from "./pages/gallery";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Componente />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about" element={<About />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
