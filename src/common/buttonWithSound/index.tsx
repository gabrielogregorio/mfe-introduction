import { useAudio } from "../useAudio";
import HoverSound from "./hoverSound.mp3";
import ClickSound from "./clicksound.mp3";
import { ReactNode } from "react";
import { Text } from "../Text";

export const ButtonWithSound = ({
  content,
  isActive = false,
}: {
  content: ReactNode;
  isActive?: boolean;
}) => {
  const clickSound = useAudio(ClickSound);
  const hoverSound = useAudio(HoverSound);

  const handleMouseEnter = () => {
    hoverSound.play();
  };

  const handleClick = () => {
    clickSound.play();
  };

  return (
    <button onMouseEnter={handleMouseEnter} onClick={handleClick} type="button">
      <Text isActive={isActive}>{content}</Text>
    </button>
  );
};
