import Bg1 from "../../assets/bg1.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { dataGames, dataGamesType } from "./data";
import { GameItem } from "./gameItem";
import {
  useHandleKeyboard,
  LayoutScreen,
  GridDefault,
  ItemSimpleMenu,
  TitleSimpleMenu,
} from "ogregorio-component-library-studies";

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
    <LayoutScreen
      screenTitle="ANÁLISE_DE_JOGOS"
      onReturn={() => navigate("/")}
      bg={Bg1}
    >
      <GridDefault
        left={
          <div>
            <TitleSimpleMenu content="JOGOS ZERADOS" />

            <div>
              {dataGames.map((game) => {
                return (
                  <div className="w-full flex-1" key={game.id}>
                    <div className="flex w-full justify-between items-center">
                      <ItemSimpleMenu
                        onClick={() => handleSelectNewGame(game.id)}
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
                  </div>
                );
              })}
            </div>
          </div>
        }
        right={gameSelected ? <GameItem game={gameSelected} /> : undefined}
      />
    </LayoutScreen>
  );
};
