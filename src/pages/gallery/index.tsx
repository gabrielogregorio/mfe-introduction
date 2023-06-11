import Bg1 from "../../assets/bg1.webp";
import { dataGalleryImages } from "./data";
import { GalleryImage } from "./galleryImage";
import { useNavigate } from "react-router-dom";
import {
  LayoutScreen,
  useHandleKeyboard,
} from "ogregorio-component-library-studies";

export const Galeria = () => {
  const navigate = useNavigate();

  useHandleKeyboard((key) => {
    if (key === "Escape") {
      navigate("/");
    }
  });
  return (
    <LayoutScreen screenTitle="GALERIA" onReturn={() => navigate("/")} bg={Bg1}>
      <div className="grid grid-cols-3 gap-[30px] px-[2rem]">
        {dataGalleryImages.map((image) => {
          return <GalleryImage key={image.id} src={image.src} />;
        })}
      </div>
    </LayoutScreen>
  );
};
