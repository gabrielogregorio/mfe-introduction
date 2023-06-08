import Bg1 from "./assets/bg1.webp";
import { BlockLevel } from "../../common/blockLevel";
import { InsideLink } from "../../common/InsideLink";

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
              <InsideLink to="/about" content="INICIAR" />
            </div>
            <div className="mt-[26px]">
              <InsideLink to="" content="UTILITÁRIOS" />
              <BlockLevel level={1}>
                <div className="mt-[26px]">
                  <InsideLink
                    to="financing-money"
                    content="Planejador financeiro"
                  />
                </div>
                <div className="mt-[26px]">
                  <InsideLink to="tasks" content="Minhas Tasks" />
                </div>

                <div className="mt-[26px]">
                  <InsideLink to="ux" content="Guia Ux" />
                </div>
              </BlockLevel>
            </div>
            <div className="mt-[26px]">
              <InsideLink to="/" content="ENTRETERIMENTO" />

              <BlockLevel level={1}>
                <div className="mt-[26px]">
                  <InsideLink to="galeria" content="ANÁLISE DE JOGOS" />
                </div>
                <div className="mt-[26px]">
                  <InsideLink to="galeria" content="MINHA GALERIA" />
                </div>
              </BlockLevel>
            </div>
          </div>

          <div className="h-[20rem]"></div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
