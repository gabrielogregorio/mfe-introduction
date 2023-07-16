import { useState } from 'react';
import { dataGamesType } from './data';
import { PrevAndNextButton } from './prevAndNextButton';
import { TitleText } from 'ogregorio-component-library-studies';
import { ExpandedMode } from '../gallery/ExpandedMode';

type Props = {
  game: dataGamesType;
};

export const GameItem = ({ game }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const [indexItemSelected, setIndexItemSelected] = useState(0);
  const nextContent = () => {
    const newIndex = indexItemSelected + 1;
    if (newIndex < game.conteudo.length) {
      setIndexItemSelected(newIndex);
    } else {
      setIndexItemSelected(0);
    }
  };

  const prevContent = () => {
    const newIndex = indexItemSelected - 1;
    if (newIndex >= 0) {
      setIndexItemSelected(newIndex);
    } else {
      setIndexItemSelected(game.conteudo.length - 1);
    }
  };

  const contentSelected = game.conteudo[indexItemSelected];

  return (
    <div>
      {isExpanded ? (
        <ExpandedMode
          title={contentSelected.title}
          description={contentSelected.description}
          media={contentSelected.media}
          handleNext={() => nextContent()}
          handlePrev={() => prevContent()}
          onClose={() => setIsExpanded(false)}
        />
      ) : undefined}

      <div className="flex items-center justify-between">
        <button type="button" onClick={() => prevContent()} className="py-4">
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            className="w-[16px] h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.351416 6.84756C-0.117139 6.37901 -0.117139 5.61807 0.351416 5.14952L5.14942 0.35152C5.49427 0.00666394 6.00781 -0.0945439 6.45762 0.0928779C6.90743 0.2803 7.19981 0.715118 7.19981 1.20241V10.7984C7.19981 11.282 6.90743 11.7205 6.45762 11.908C6.00781 12.0954 5.49427 11.9904 5.14942 11.6493L0.351416 6.85131V6.84756Z"
              fill="white"
            />
          </svg>
        </button>

        <div className="flex-1 ml-[10px]">
          <TitleText
            content={`${indexItemSelected + 1} de ${game.conteudo.length}. ${contentSelected.title}`}></TitleText>
        </div>

        <button type="button" onClick={() => nextContent()} className="py-4">
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            className="w-[16px] h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.84878 5.15244C7.31733 5.62099 7.31733 6.38193 6.84878 6.85048L2.05078 11.6485C1.70592 11.9933 1.19239 12.0945 0.742576 11.9071C0.292763 11.7197 0.000385284 11.2849 0.000385284 10.7976L0.000385284 1.20159C0.000385284 0.718039 0.292763 0.279471 0.742576 0.0920486C1.19239 -0.0953732 1.70592 0.00958347 2.05078 0.350691L6.84878 5.14869V5.15244Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div>
        {contentSelected.media.youtube ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${contentSelected.media.youtube}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="min-h-[422px] w-full h-full object-cover border-2 border-white rounded-[3px]"></iframe>
        ) : contentSelected.media.imagem ? (
          <button type="button" className="cursor-pointer" onClick={() => setIsExpanded(true)}>
            <img
              src={contentSelected.media.imagem}
              alt=""
              className="w-full h-full object-cover border-2 border-white rounded-[3px]"
            />
          </button>
        ) : undefined}
      </div>

      {contentSelected.description}

      <div className="flex items-center justify-between mt-[23px]">
        <PrevAndNextButton typeAction="prev" action={() => prevContent()} />
        <PrevAndNextButton typeAction="next" action={() => nextContent()} />
      </div>
      <div className="h-[10rem]"></div>
    </div>
  );
};
