import { Text } from "../../common/Text";
import Bg1 from "../../assets/bg1.webp";
import { dataGalleryImages } from "./data";
import { GalleryImage } from "./galleryImage";
import { Breadcrumb } from "../../common/breacrumb";
import { ReturnToHome } from "../../common/returnToHome";

export const Galeria = () => {
  return (
    <div className="relative min-h-[100vh] max-h-[100vh] h-full max-w-[100vw] w-full">
      <div className="absolute h-screen w-screen top-0 left-0 z-10">
        <img src={Bg1} className=" w-[100vw] h-[100vh] object-cover" alt="" />
      </div>
      <div className="absolute h-screen w-screen top-0 left-0 z-20 bg-black/80 animate-fadeInDrop transition-all duration-200 pt-[80px] px-[90px] flex flex-col">
        <Breadcrumb content="GALERIA" />
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

        <ReturnToHome />
      </div>
    </div>
  );
};
