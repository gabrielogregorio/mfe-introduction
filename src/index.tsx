import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Introduction } from "./introduction";
import { About } from "./about.me";
import { Games } from "./games";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
