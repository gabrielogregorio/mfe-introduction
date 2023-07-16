import { useNavigate } from 'react-router-dom';
import { ReactNode, useState } from 'react';
import { ModelListScreen } from './screens/modelScreenList';
import {
  LayoutScreen,
  useHandleKeyboard,
  TitleSimpleMenu,
  LinkExternal,
  GridDefault,
} from 'ogregorio-component-library-studies';
import Bg1 from '../../assets/bg1.webp';
import { dataIcons } from './dataIcons';
import { dataJob } from './dataJobs';
import { dataStudies } from './dataStudies';
import { dataExtraCourses } from './dataExtraCourses';
import { AboutIntroductionScreen } from './screens/introduction';
import { ItemSimpleMenuShared } from '../../shared/ItemSimpleMenuShared';

enum AboutScreensEnum {
  'Introduction' = 'Introduction',
  'Professional' = 'Professional',
  'Studies' = 'Studies',
  'Courses' = 'Courses',
}

export const About = () => {
  const navigate = useNavigate();
  const [screenSelected, setScreenSelected] = useState<AboutScreensEnum>(AboutScreensEnum.Introduction);

  const screenSelectedComponent: {
    [screen in AboutScreensEnum]: ReactNode;
  } = {
    [AboutScreensEnum.Introduction]: <AboutIntroductionScreen />,
    [AboutScreensEnum.Professional]: <ModelListScreen title="Professional" data={dataJob} />,
    [AboutScreensEnum.Studies]: <ModelListScreen title="Escolaridade" data={dataStudies} />,
    [AboutScreensEnum.Courses]: <ModelListScreen title="Cursos Extras" data={dataExtraCourses} />,
  };

  useHandleKeyboard((key) => {
    if (key === 'Escape') {
      navigate('/');
    }
  });

  return (
    <LayoutScreen screenTitle="INTRODUÇÃO" onReturn={() => navigate('/')} bg={Bg1}>
      <GridDefault
        left={
          <div className="flex flex-col justify-center items-start">
            <TitleSimpleMenu content="INFORMAÇÕES GERAIS" />

            <ItemSimpleMenuShared
              level="1"
              isSelected={screenSelected === AboutScreensEnum.Introduction}
              onClick={() => setScreenSelected(AboutScreensEnum.Introduction)}
              content="INTRODUÇÃO"
            />

            <ItemSimpleMenuShared
              level="1"
              isSelected={screenSelected === AboutScreensEnum.Professional}
              onClick={() => setScreenSelected(AboutScreensEnum.Professional)}
              content="PROFESSIONAL"
            />

            <ItemSimpleMenuShared
              level="1"
              isSelected={screenSelected === AboutScreensEnum.Courses}
              onClick={() => setScreenSelected(AboutScreensEnum.Courses)}
              content="CURSOS"
            />

            <ItemSimpleMenuShared
              level="1"
              isSelected={screenSelected === AboutScreensEnum.Studies}
              onClick={() => setScreenSelected(AboutScreensEnum.Studies)}
              content="ESTUDOS"
            />

            <div className="mt-[35px]"></div>

            <TitleSimpleMenu content="REDES SOCIAIS" />

            <LinkExternal
              level="1"
              href="https://github.com/gabrielogregorio"
              content="github.com/gabrielogregorio"
              icon={dataIcons.github}></LinkExternal>
            <LinkExternal
              level="1"
              href="https://twitter.com/gregoriodev"
              icon={dataIcons.twitter}
              content="twitter.com/gregoriodev"></LinkExternal>

            <LinkExternal
              level="1"
              href="https://youtube.com/@gameplaysdiferenciadas"
              icon={dataIcons.youtube}
              content="youtube.com/@gameplaysdiferenciadas"></LinkExternal>

            <LinkExternal
              level="1"
              href="https://linkedin.com/in/gabrielogregorio"
              icon={dataIcons.linkedin}
              content="linkedin.com/in/gabrielogregorio"></LinkExternal>
          </div>
        }
        right={screenSelectedComponent[screenSelected]}
      />
    </LayoutScreen>
  );
};
