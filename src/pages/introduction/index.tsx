import { useNavigate } from "react-router-dom";
import Bg1 from "../../assets/bg1.webp";
import {
  ButtonWithSound,
  NavigationLevel,
  NavigationSpace,
} from "ogregorio-component-library-studies";

const Introduction = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative min-w-[100vw] min-h-[100vh] max-h-[100vh] max-w-[100vw]">
        <div className="absolute min-w-[100vw] min-h-[100vh] max-h-[100vh] max-w-[100vw] top-0 left-0 z-10">
          <img src={Bg1} className="w-[100vw] h-[100vh] object-cover" alt="" />
        </div>

        <div className="absolute min-w-[100vw] min-h-[100vh] max-h-[100vh] max-w-[100vw] overflow-y-auto scrollbar top-0 bg-black/70 left-0 z-20 animate-fadeOutDrop">
          <div className="mt-[268px] ml-[62px]">
            <NavigationSpace>
              <ButtonWithSound
                onClick={() => navigate("/about")}
                content="Começar"
              />
            </NavigationSpace>

            <NavigationSpace>
              <ButtonWithSound
                onClick={() => navigate("/")}
                isActive
                content="UTILITÁRIOS"
              />
            </NavigationSpace>

            <NavigationLevel level={1}>
              <NavigationSpace>
                <ButtonWithSound
                  onClick={() => navigate("remaining-money")}
                  content="Planejador financeiro"
                />
              </NavigationSpace>

              <NavigationSpace>
                <ButtonWithSound
                  onClick={() => navigate("tasks")}
                  content="Minhas Tasks"
                />
              </NavigationSpace>

              <NavigationSpace>
                <ButtonWithSound
                  onClick={() => navigate("ux")}
                  content="Guia Ux"
                />
              </NavigationSpace>
            </NavigationLevel>

            <NavigationSpace>
              <ButtonWithSound
                isActive
                onClick={() => navigate("/")}
                content="ENTRETERIMENTO"
              />
            </NavigationSpace>

            <NavigationLevel level={1}>
              <NavigationSpace>
                <ButtonWithSound
                  onClick={() => navigate("Games")}
                  content="ANÁLISE DE JOGOS"
                />
              </NavigationSpace>

              <NavigationSpace>
                <ButtonWithSound
                  onClick={() => navigate("galeria")}
                  content="MINHA GALERIA"
                />
              </NavigationSpace>
            </NavigationLevel>
          </div>
        </div>

        <div className="h-[20rem]"></div>
      </div>
    </>
  );
};

export default Introduction;
