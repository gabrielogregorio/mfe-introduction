import Bg1 from "../../assets/bg1.webp";
import { Text } from "../../common/Text";
import { NavigationLevel } from "../../common/navigationLevel";
import { NavigationSpace } from "../../common/navigationSpace";
import { Breadcrumb } from "../../common/breacrumb";
import { ReturnToHome } from "../../common/returnToHome";
import { ButtonWithSound } from "../../common/buttonWithSound";
import { useHandleKeyboard } from "../../common/useHandleKeyboard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { dataGames, dataGamesType } from "./data";
import { GameItem } from "./gameItem";

export const Games = () => {
  const navigate = useNavigate();
  const [gameSelected, setgameSelected] = useState<dataGamesType | null>(
    dataGames[0]
  );

  useHandleKeyboard((key) => {
    if (key === "Escape") {
      navigate("/");
    }
  });

  const handleSelectNewGame = (id: string) => {
    const gameFinded = dataGames.findIndex((game) => game.id === id);

    if (gameFinded >= 0) {
      setgameSelected(null);

      setTimeout(() => {
        setgameSelected(dataGames[gameFinded]);
      }, 200);
    }
  };

  return (
    <div className="relative min-h-[100vh] max-h-[100vh] h-full max-w-[100vw] w-full">
      <div className="absolute h-screen w-screen top-0 left-0 z-10">
        <img src={Bg1} className="w-[100vw] h-[100vh] object-cover" alt="" />
      </div>
      <div className="absolute h-screen w-screen max-h-screen max-w-screen top-0 left-0 z-20 bg-black/80 animate-fadeInDrop transition-all duration-200 pt-[80px] px-[90px] flex flex-col">
        <Breadcrumb content="PERFIL" />

        <div className="flex gap-6 mt-[64px] animate-fadeIn  max-h-full overflow-y-hidden px-[2rem]">
          <div className="flex-1 overflow-y-scroll scrollbar">
            <h2>
              <Text fontSize="text-[24px]">INFORMAÇÔES GERAIS</Text>
            </h2>

            <div>
              <NavigationLevel level={1}>
                <div className="flex flex-col items-start gap-[12px] mt-[17px]">
                  {dataGames.map((game) => {
                    return (
                      <div className="w-full flex-1" key={game.id}>
                        <NavigationSpace>
                          <div className="flex w-full justify-between items-center">
                            <ButtonWithSound
                              onClick={() => handleSelectNewGame(game.id)}
                              isActive={gameSelected?.id === game.id}
                              content={game.name}
                            />
                            <div
                              className={`${
                                gameSelected?.id === game.id
                                  ? "text-white"
                                  : "text-white/70"
                              } hover:text-white font-roboto text-[1.5rem] font-normal text-right pr-[1rem]`}
                            >
                              {game.classificação}
                            </div>
                          </div>
                        </NavigationSpace>
                      </div>
                    );
                  })}
                </div>
              </NavigationLevel>
            </div>
            <div className="h-[5rem]"></div>
          </div>
          <div className="flex-1 overflow-y-scroll scrollbar px-[2rem]">
            <div>
              {gameSelected ? <GameItem game={gameSelected} /> : undefined}
            </div>
            <div className="h-[15rem]"></div>
          </div>
        </div>

        <ReturnToHome />
      </div>
    </div>
  );
};
