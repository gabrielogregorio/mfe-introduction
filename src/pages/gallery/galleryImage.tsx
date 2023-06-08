import { ReactElement } from "react";

type Props = {
  src: string;
};

export const GalleryImage = ({ src }: Props): ReactElement => {
  return (
    <div className="flex items-center justify-center relative">
      <img
        src={src}
        alt=""
        className="object-cover w-full h-full hover:scale-105 transition-all duration-150 cursor-pointer"
      />
    </div>
  );
};
