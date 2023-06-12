import {
  ItemSimpleMenu,
  ItemSimpleMenuProps,
  useAudio,
} from "ogregorio-component-library-studies";
import HoverSound from "./hoverSound.mp3";
import ClickSound from "./clicksound.mp3";

export const ItemSimpleMenuShared = ({
  onClick,
  ...props
}: ItemSimpleMenuProps) => {
  const clickSound = useAudio(ClickSound);
  const hoverSound = useAudio(HoverSound);

  const handleMouseEnter = () => {
    hoverSound.play();
  };

  const handleClick = () => {
    onClick();
    clickSound.play();
  };

  return (
    <ItemSimpleMenu
      onClick={handleClick}
      {...props}
      onHover={handleMouseEnter}
    />
  );
};
