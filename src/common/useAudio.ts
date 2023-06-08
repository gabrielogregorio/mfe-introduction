import { useContext } from "react";
import { AcceptAudioContext } from "../contexts/acceptAudio";

export const useAudio = (src?: string) => {
  const audioItem = new Audio(src);
  const { acceptAudio } = useContext(AcceptAudioContext);

  const play = () => {
    if (acceptAudio) {
      audioItem.volume = 0.2;
      audioItem.play();
    }
  };

  return {
    play,
  };
};
