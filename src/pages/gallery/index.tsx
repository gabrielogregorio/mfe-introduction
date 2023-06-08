import { Text } from "../Text";
import { InsideLink } from "../InsideLink";

import Bg1 from "../assets/bg1.webp";
import { dataGalleryImages } from "./data";
import { GalleryImage } from "./galleryImage";

export const Galeria = () => {
  return (
    <div className="relative min-h-[100vh] max-h-[100vh] h-full max-w-[100vw] w-full">
      <div className="absolute h-screen w-screen top-0 left-0 z-10">
        <img src={Bg1} className=" w-[100vw] h-[100vh] object-cover" alt="" />
      </div>
      <div className="absolute h-screen w-screen top-0 left-0 z-20 bg-black/80 animate-fadeInDrop transition-all duration-200 pt-[80px] px-[90px] flex flex-col">
        <div className="flex items-center animate-fadeIn">
          <InsideLink to="/" fontSize="text-[36px]" content={"INICIO"} />

          <div className="h-[25px] w-[2px] bg-white/70 mx-[24px]"></div>
          <Text fontSize="text-[36px]">Galeria</Text>
          <div className="flex-1 bg-white/70 h-[2px] ml-[48px]"></div>
        </div>

        <div className="mt-[64px] animate-fadeIn overflow-y-auto scrollbar">
          <div>
            <div>
              <Text fontSize="text-[24px]">Algumas imagens diversas</Text>
              <div className="grid grid-cols-3 gap-[36px] px-[1rem]">
                {dataGalleryImages.map((image) => {
                  return <GalleryImage key={image.id} src={image.src} />;
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 mb-[120px] flex flex-col justify-end items-center  animate-fadeIn">
          <div className="bg-white/70 w-full h-[2px]"></div>

          <div className="w-full flex items-center mt-[11px]">
            <span className="mr-[9px]">
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 5.5C11 6.95869 10.4205 8.35764 9.38909 9.38909C8.35764 10.4205 6.95869 11 5.5 11C4.04131 11 2.64236 10.4205 1.61091 9.38909C0.579462 8.35764 0 6.95869 0 5.5C0 4.04131 0.579462 2.64236 1.61091 1.61091C2.64236 0.579462 4.04131 0 5.5 0C6.95869 0 8.35764 0.579462 9.38909 1.61091C10.4205 2.64236 11 4.04131 11 5.5ZM6.95449 7.83965C7.11777 7.74941 7.21875 7.57539 7.21875 7.39062L7.21875 3.60937C7.21875 3.42246 7.11777 3.25059 6.95449 3.16035C6.79121 3.07012 6.59355 3.07227 6.43242 3.17109L3.33867 5.06172C3.18613 5.15625 3.0916 5.32168 3.0916 5.50215C3.0916 5.68262 3.18613 5.84805 3.33867 5.94258L6.43242 7.8332C6.59141 7.92988 6.79121 7.93418 6.95449 7.84395V7.83965Z"
                  fill="white"
                />
              </svg>
            </span>
            <InsideLink to="/" content="VOLTAR" />
          </div>
        </div>
      </div>
    </div>
  );
};
