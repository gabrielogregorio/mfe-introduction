import { ReactElement } from "react";

type Props = {
  src: string;
  index: number;
  onClick: (index: number) => void;
};

export const GalleryImage = ({ src, onClick, index }: Props): ReactElement => {
  return (
    <button
      type="button"
      onClick={() => onClick(index)}
      className="flex items-center justify-center relative"
    >
      <img
        src={src}
        alt=""
        className="object-cover w-full h-full hover:scale-105 transition-all duration-150 cursor-pointer"
      />
    </button>
  );
};
