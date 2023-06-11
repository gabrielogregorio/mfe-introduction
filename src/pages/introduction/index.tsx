import { useNavigate } from "react-router-dom";
import Bg1 from "../../assets/bg1.webp";
import { ItemMainMenu } from "ogregorio-component-library-studies";

const Introduction = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative min-w-[100vw] min-h-[100vh] max-h-[100vh] max-w-[100vw]">
        <div className="absolute min-w-[100vw] min-h-[100vh] max-h-[100vh] max-w-[100vw] top-0 left-0 z-10">
          <img src={Bg1} className="w-[100vw] h-[100vh] object-cover" alt="" />
        </div>

        <div className="absolute min-w-[100vw] min-h-[100vh] max-h-[100vh] max-w-[100vw] overflow-y-auto scrollbar top-0 bg-black/70 left-0 z-20 animate-fadeOutDrop">
          <div className="pt-[270px] px-[80px] flex flex-col justify-center items-start">
            <ItemMainMenu
              onClick={() => navigate("/about")}
              content="INICIAR"
            />

            <ItemMainMenu
              onClick={() => navigate("remaining-money")}
              content="QUANTO SOBRA"
            />

            <ItemMainMenu
              onClick={() => navigate("tasks")}
              content="MINHAS TASKS"
            />

            <ItemMainMenu onClick={() => navigate("ux")} content="HELP UX" />

            <ItemMainMenu
              onClick={() => navigate("Games")}
              content="ANÁLISE DE JOGOS"
            />

            <ItemMainMenu
              onClick={() => navigate("galeria")}
              content="GALERIA"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
