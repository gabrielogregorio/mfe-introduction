import { Button, TitleText } from "ogregorio-component-library-studies";
import { ReactNode } from "react";
import { mediaType } from "../games/data";

type expandedModoType = {
  title: string;
  media: mediaType;
  description: ReactNode;
  onClose: () => void;
  handleNext: () => void;
  handlePrev: () => void;
};

export const ExpandedMode = ({
  media,
  title,
  description,
  onClose,
  handleNext,
  handlePrev,
}: expandedModoType) => {
  return (
    <div className="fixed top-0 left-0 max-w-[100vw] bg-black/80 animate-fadeInDrop max-h-[100vh] min-w-[100vw] min-h-[100vh] z-30 flex flex-col items-center overflow-y-auto scrollbar px-[150px] transition-all duration-200">
      <div className="min-h-[80px]"></div>

      <div className="w-full relative">
        <div className="absolute top-1/2 -left-[3rem]">
          <Button
            onClick={() => handlePrev()}
            content=""
            iconLeft={
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14349 14 3.36301 13.2625 2.05025 11.9497C0.737497 10.637 0 8.85652 0 7C0 5.14349 0.737497 3.36301 2.05025 2.05025C3.36301 0.737497 5.14349 0 7 0C8.85652 0 10.637 0.737497 11.9497 2.05025C13.2625 3.36301 14 5.14349 14 7ZM8.85117 9.97773C9.05898 9.86289 9.1875 9.64141 9.1875 9.40625V4.59375C9.1875 4.35586 9.05898 4.13711 8.85117 4.02227C8.64336 3.90742 8.3918 3.91016 8.18672 4.03594L4.24922 6.44219C4.05508 6.5625 3.93477 6.77305 3.93477 7.00273C3.93477 7.23242 4.05508 7.44297 4.24922 7.56328L8.18672 9.96953C8.38906 10.0926 8.64336 10.098 8.85117 9.9832V9.97773Z"
                  fill="white"
                />
              </svg>
            }
          />
        </div>

        <div className="absolute top-1/2 -right-[3rem]">
          <Button
            onClick={() => handleNext()}
            content=""
            iconRight={
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85651 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 8.85651 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85651 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85651 0 7ZM5.14883 4.02227C4.94102 4.13711 4.8125 4.35859 4.8125 4.59375V9.40625C4.8125 9.64414 4.94102 9.86289 5.14883 9.97773C5.35664 10.0926 5.6082 10.0898 5.81328 9.96406L9.75078 7.55781C9.94492 7.4375 10.0652 7.22695 10.0652 6.99727C10.0652 6.76758 9.94492 6.55703 9.75078 6.43672L5.81328 4.03047C5.61094 3.90742 5.35664 3.90195 5.14883 4.0168V4.02227Z"
                  fill="white"
                />
              </svg>
            }
          />
        </div>

        {media.youtube ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${media.youtube}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className=" min-h-[497px] w-full h-full object-cover border-2 border-white rounded-[3px]"
          ></iframe>
        ) : media.imagem ? (
          <img
            src={media.imagem}
            alt=""
            className="w-full h-full object-cover border-2 border-white rounded-[3px]"
          />
        ) : undefined}
      </div>

      <div className="w-full mt-[12px]">
        <TitleText content={title}></TitleText>
      </div>

      <div className="w-full">{description}</div>

      <div className="flex items-center w-full mt-[10px]">
        <Button
          iconLeft={
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              className="w-[16px] h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 5.5C11 6.95869 10.4205 8.35764 9.38909 9.38909C8.35764 10.4205 6.95869 11 5.5 11C4.04131 11 2.64236 10.4205 1.61091 9.38909C0.579462 8.35764 0 6.95869 0 5.5C0 4.04131 0.579462 2.64236 1.61091 1.61091C2.64236 0.579462 4.04131 0 5.5 0C6.95869 0 8.35764 0.579462 9.38909 1.61091C10.4205 2.64236 11 4.04131 11 5.5ZM6.95449 7.83965C7.11777 7.74941 7.21875 7.57539 7.21875 7.39062L7.21875 3.60937C7.21875 3.42246 7.11777 3.25059 6.95449 3.16035C6.79121 3.07012 6.59355 3.07227 6.43242 3.17109L3.33867 5.06172C3.18613 5.15625 3.0916 5.32168 3.0916 5.50215C3.0916 5.68262 3.18613 5.84805 3.33867 5.94258L6.43242 7.8332C6.59141 7.92988 6.79121 7.93418 6.95449 7.84395V7.83965Z"
                fill="white"
              />
            </svg>
          }
          onClick={() => handlePrev()}
          content={"VOLTAR"}
        />

        <div className="flex-1"></div>
        <Button onClick={() => onClose()} content={"CANCELAR"} />
        <div className="flex-1"></div>

        <Button
          iconRight={
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              className="w-[16px] h-auto rotate-180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 5.5C11 6.95869 10.4205 8.35764 9.38909 9.38909C8.35764 10.4205 6.95869 11 5.5 11C4.04131 11 2.64236 10.4205 1.61091 9.38909C0.579462 8.35764 0 6.95869 0 5.5C0 4.04131 0.579462 2.64236 1.61091 1.61091C2.64236 0.579462 4.04131 0 5.5 0C6.95869 0 8.35764 0.579462 9.38909 1.61091C10.4205 2.64236 11 4.04131 11 5.5ZM6.95449 7.83965C7.11777 7.74941 7.21875 7.57539 7.21875 7.39062L7.21875 3.60937C7.21875 3.42246 7.11777 3.25059 6.95449 3.16035C6.79121 3.07012 6.59355 3.07227 6.43242 3.17109L3.33867 5.06172C3.18613 5.15625 3.0916 5.32168 3.0916 5.50215C3.0916 5.68262 3.18613 5.84805 3.33867 5.94258L6.43242 7.8332C6.59141 7.92988 6.79121 7.93418 6.95449 7.84395V7.83965Z"
                fill="white"
              />
            </svg>
          }
          onClick={() => handleNext()}
          content={"PROXIMO"}
        />
      </div>

      <div className="min-h-[5rem]"></div>
    </div>
  );
};
