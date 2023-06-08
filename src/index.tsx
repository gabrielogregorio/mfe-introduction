import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/aboutMe";
import { Games } from "./pages/games";
import Componente from "./pages/introduction";
import { Galeria } from "./pages/gallery";
import { AcceptAudioContext } from "./contexts/acceptAudio";
import { useContext } from "react";

const Router = () => {
  const { acceptAudio, setAcceptAudio } = useContext(AcceptAudioContext);

  if (!acceptAudio) {
    return (
      <div className="min-h-screen min-w-screen max-h-screen max-w-screen flex items-center justify-center bg-black overflow-hidden">
        <button
          type="button"
          className="text-white text-[32px] uppercase w-full h-screen"
          onClick={() => {
            setAcceptAudio(true);
          }}
        >
          Clique para continuar
        </button>
      </div>
    );
  }

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
