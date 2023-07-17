import Bg1 from '../../assets/bg1.webp';
import { dataGalleryImages } from './data';
import { GalleryImage } from './galleryImage';
import { useNavigate } from 'react-router-dom';
import { LayoutScreen, useHandleKeyboard } from 'ogregorio-component-library-studies';
import { useState } from 'react';
import { ExpandedMode } from './ExpandedMode';

export const Galeria = () => {
  const navigate = useNavigate();

  useHandleKeyboard((key) => {
    if (key === 'Escape') {
      navigate('/');
    }
  });

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [indexItemSelected, setIndexItemSelected] = useState(0);

  const nextContent = () => {
    const newIndex = indexItemSelected + 1;
    if (newIndex < dataGalleryImages.length) {
      setIndexItemSelected(newIndex);
    } else {
      setIndexItemSelected(0);
    }
  };

  const prevContent = () => {
    const newIndex = indexItemSelected - 1;
    if (newIndex >= 0) {
      setIndexItemSelected(newIndex);
    } else {
      setIndexItemSelected(dataGalleryImages.length - 1);
    }
  };

  const contentSelected = dataGalleryImages[indexItemSelected];

  return (
    <LayoutScreen screenTitle="GALERIA" onReturn={() => navigate('/')} bg={Bg1}>
      <div>
        {isExpanded ? (
          <ExpandedMode
            title={''}
            description={contentSelected.description}
            media={{ imagem: contentSelected.src }}
            handleNext={() => nextContent()}
            handlePrev={() => prevContent()}
            onClose={() => setIsExpanded(false)}
          />
        ) : undefined}

        <div>TESTE</div>

        <div className="grid grid-cols-3 gap-[30px] px-[2rem]">
          {dataGalleryImages.map((image, index) => {
            return (
              <GalleryImage
                key={image.id}
                index={index}
                src={image.src}
                onClick={(indexLocal) => {
                  setIndexItemSelected(indexLocal);
                  setIsExpanded(true);
                }}
              />
            );
          })}
        </div>
      </div>
    </LayoutScreen>
  );
};
