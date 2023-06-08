import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./about.me";
import { Games } from "./games";
import Componente from "./introduction";
import { Galeria } from "./gallery";
import { AcceptAudioContext } from "./contexts/acceptAudio";
import { useContext } from "react";

const Router = () => {
  const { acceptAudio, setAcceptAudio } = useContext(AcceptAudioContext);

  if (!acceptAudio) {
    return (
      <div className="min-h-screen min-w-screen max-h-screen max-w-screen flex items-center justify-center bg-black overflow-hidden">
        <button
          type="button"
          className="text-white"
          onClick={() => {
            setAcceptAudio(true);
          }}
        >
          Continuar
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
