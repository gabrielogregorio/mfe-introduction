import { Button, ButtonProps, useAudio } from 'ogregorio-component-library-studies';
import HoverSound from './hoverSound.mp3';
import ClickSound from './clicksound.mp3';

export const ButtonShared = ({ onClick, ...props }: ButtonProps) => {
  const clickSound = useAudio(ClickSound);
  const hoverSound = useAudio(HoverSound);

  const handleMouseEnter = () => {
    hoverSound.play();
  };

  const handleClick = () => {
    onClick();
    clickSound.play();
  };

  return <Button onClick={handleClick} {...props} onHover={handleMouseEnter} />;
};
