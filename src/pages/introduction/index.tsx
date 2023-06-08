import Bg1 from "../../assets/bg1.webp";
import { LinkNavigationWithSound } from "../../common/linkNavigationWithSound";
import { NavigationLevel } from "../../common/navigationLevel";

const Introduction = () => {
  return (
    <>
      <div className="relative min-h-[100vh] max-h-[100vh] h-full max-w-[100vw] w-full">
        <div className="absolute h-screen w-screen top-0 left-0 z-10">
          <img src={Bg1} className="w-[100vw] h-[100vh] object-cover" alt="" />
        </div>

        <div className="absolute h-screen overflow-y-auto scrollbar w-screen top-0 bg-black/70 left-0 z-20 animate-fadeOutDrop">
          <div className="mt-[268px] ml-[62px]">
            <div>
              <LinkNavigationWithSound to="/about" content="INICIAR" />
            </div>
            <div className="mt-[26px]">
              <LinkNavigationWithSound to="" content="UTILITÁRIOS" />
              <NavigationLevel level={1}>
                <div className="mt-[26px]">
                  <LinkNavigationWithSound
                    to="financing-money"
                    content="Planejador financeiro"
                  />
                </div>
                <div className="mt-[26px]">
                  <LinkNavigationWithSound to="tasks" content="Minhas Tasks" />
                </div>

                <div className="mt-[26px]">
                  <LinkNavigationWithSound to="ux" content="Guia Ux" />
                </div>
              </NavigationLevel>
            </div>
            <div className="mt-[26px]">
              <LinkNavigationWithSound to="/" content="ENTRETERIMENTO" />

              <NavigationLevel level={1}>
                <div className="mt-[26px]">
                  <LinkNavigationWithSound
                    to="galeria"
                    content="ANÁLISE DE JOGOS"
                  />
                </div>
                <div className="mt-[26px]">
                  <LinkNavigationWithSound
                    to="galeria"
                    content="MINHA GALERIA"
                  />
                </div>
              </NavigationLevel>
            </div>
          </div>

          <div className="h-[20rem]"></div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
