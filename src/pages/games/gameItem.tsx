import { dataGamesType } from "./data";

type Props = {
  game: dataGamesType;
};

export const GameItem = ({ game }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#212332] w-full">
      <div className="max-w-[1100px] max-h-[400px] h-full w-full object-cover relative">
        <div className="max-w-[1100px] max-h-[400px] h-full w-full overflow-hidden">
          {game.imagens[0]}
        </div>

        <button
          type="button"
          className="w-[51px] h-[51px] bg-[#21233265] rounded-[3px] flex items-center justify-center absolute right-2 bottom-2"
        >
          <svg
            width="10"
            height="19"
            viewBox="0 0 10 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.40309 0.285742C5.23238 0.103906 4.99859 0 4.74996 0C4.50133 0 4.26754 0.103906 4.09684 0.285742L0.237461 4.44199C-0.00375009 4.70176 -0.066836 5.08027 0.0741796 5.40313C0.215195 5.72598 0.538047 5.9375 0.890586 5.9375H2.96871V13.0625H0.890586C0.538047 13.0625 0.215195 13.274 0.0741796 13.5969C-0.066836 13.9197 -0.00375009 14.2982 0.237461 14.558L4.09684 18.7143C4.26383 18.8961 4.50133 19 4.74996 19C4.99859 19 5.23238 18.8961 5.40309 18.7143L9.26246 14.558C9.50367 14.2982 9.56676 13.9197 9.42574 13.5969C9.28473 13.274 8.96187 13.0625 8.60934 13.0625H6.53121V5.9375H8.60934C8.96187 5.9375 9.28473 5.72598 9.42574 5.40313C9.56676 5.08027 9.50367 4.70176 9.26246 4.44199L5.40309 0.285742Z"
              fill="white"
            />
          </svg>
        </button>

        <div className="absolute bottom-2 left-1 flex flex-col items-start justify-center">
          <div className="uppercase  text-white font-normal text-[12px] rounded-[3px] px-[5px] py-[3px] bg-[#FF5F5F]">
            Nota {game.available}
          </div>
          <div className="text-white text-[24px] font-bold rounded-[3px] px-[5px] py-[3px] bg-[#212332] mt-[2px]">
            {game.name}
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] max-h-[400px] h-full w-full">
        <h3 className="mt-[9px] text-white font-normal text-[14px]">
          conteudo da comunidade
        </h3>

        <div className="flex gap-[17px] w-full mt-[13px]">
          {game.video.map((item) => {
            return (
              <div key={item}>
                <button type="button">
                  <img
                    src={`https://img.youtube.com/vi/${item}/hqdefault.jpg`}
                    alt=""
                    className="w-[127px] h-[60px] object-cover rounded-[3px]"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-[10rem]"></div>
    </div>
  );
};
