import { dataGames } from "./data";
import { GameItem } from "./gameItem";

export const Games = () => {
  return (
    <div>
      <h1 className="text-red-300 text-2xl">Alguns jogos</h1>
      {dataGames.map((game) => {
        return <GameItem game={game} key={game.id} />;
      })}
    </div>
  );
};
