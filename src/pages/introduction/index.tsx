import Bg1 from "../../assets/bg1.webp";
import { LinkNavigationWithSound } from "../../common/linkNavigationWithSound";
import { NavigationLevel } from "../../common/navigationLevel";
import { NavigationSpace } from "../../common/navigationSpace";

const Introduction = () => {
  return (
    <>
      <div className="relative min-w-[100vw] min-h-[100vh] max-h-[100vh] max-w-[100vw]">
        <div className="absolute min-w-[100vw] min-h-[100vh] max-h-[100vh] max-w-[100vw] top-0 left-0 z-10">
          <img src={Bg1} className="w-[100vw] h-[100vh] object-cover" alt="" />
        </div>

        <div className="absolute min-w-[100vw] min-h-[100vh] max-h-[100vh] max-w-[100vw] overflow-y-auto scrollbar top-0 bg-black/70 left-0 z-20 animate-fadeOutDrop">
          <div className="mt-[268px] ml-[62px]">
            <NavigationSpace>
              <LinkNavigationWithSound to="/about" content="Começar" />
            </NavigationSpace>

            {/* <NavigationSpace>
              <LinkNavigationWithSound to="" isActive content="UTILITÁRIOS" />
            </NavigationSpace> */}

            {/* <NavigationLevel level={1}>
              <NavigationSpace>
                <LinkNavigationWithSound
                  to="financing-money"
                  content="Planejador financeiro"
                />
              </NavigationSpace>

              <NavigationSpace>
                <LinkNavigationWithSound to="tasks" content="Minhas Tasks" />
              </NavigationSpace>

              <NavigationSpace>
                <LinkNavigationWithSound to="ux" content="Guia Ux" />
              </NavigationSpace>
            </NavigationLevel> */}

            <NavigationSpace>
              <LinkNavigationWithSound
                isActive
                to="/"
                content="ENTRETERIMENTO"
              />
            </NavigationSpace>

            <NavigationLevel level={1}>
              <NavigationSpace>
                <LinkNavigationWithSound
                  to="Games"
                  content="ANÁLISE DE JOGOS"
                />
              </NavigationSpace>

              <NavigationSpace>
                <LinkNavigationWithSound to="galeria" content="MINHA GALERIA" />
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
