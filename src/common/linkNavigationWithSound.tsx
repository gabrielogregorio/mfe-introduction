import { Link } from "react-router-dom";
import { Text } from "./Text";
import { ReactNode } from "react";

import { useAudio } from "./useAudio";
import HoverSound from "./buttonWithSound/hoverSound.mp3";
import ClickSound from "./buttonWithSound/clicksound.mp3";

export const LinkNavigationWithSound = ({
  to,
  content,
  fontSize = undefined,
}: {
  to: string;
  content: ReactNode;
  fontSize?: string;
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
    <Link
      to={to}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      className="inline-block"
    >
      <div className="group py-[11px] transition-all duration-150 flex items-center justify-center px-[36px] border-2 border-transparent hover:border-2 hover:bg-black/20 hover:border-white">
        <Text fontSize={fontSize}>{content}</Text>
      </div>
    </Link>
  );
};
