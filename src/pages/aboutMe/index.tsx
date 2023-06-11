import { useNavigate } from "react-router-dom";
import { ReactNode, useState } from "react";
// import { AboutIntroductionScreen } from "./screens/introduction";
import { ModelListScreen } from "./screens/modelScreenList";
// import { dataStudies } from "./dataStudies";
// import { dataJob } from "./dataJobs";
// import { dataExtraCourses } from "./dataExtraCourses";
import {
  LayoutScreen,
  ItemSimpleMenu,
  useHandleKeyboard,
  TitleSimpleMenu,
  LinkExternal,
  GridDefault,
} from "ogregorio-component-library-studies";

enum AboutScreensEnum {
  "Introduction" = "Introduction",
  "Professional" = "Professional",
  "Studies" = "Studies",
  "Courses" = "Courses",
}

import Bg1 from "../../assets/bg1.webp";

import { dataIcons } from "./dataIcons";
import { dataJob } from "./dataJobs";
import { dataStudies } from "./dataStudies";
import { dataExtraCourses } from "./dataExtraCourses";
import { AboutIntroductionScreen } from "./screens/introduction";

export const About = () => {
  const navigate = useNavigate();
  const [screenSelected, setScreenSelected] = useState<AboutScreensEnum>(
    AboutScreensEnum.Introduction
  );

  const screenSelectedComponent: {
    [screen in AboutScreensEnum]: ReactNode;
  } = {
    [AboutScreensEnum.Introduction]: <AboutIntroductionScreen />,
    [AboutScreensEnum.Professional]: (
      <ModelListScreen title="Professional" data={dataJob} />
    ),
    [AboutScreensEnum.Studies]: (
      <ModelListScreen title="Escolaridade" data={dataStudies} />
    ),
    [AboutScreensEnum.Courses]: (
      <ModelListScreen title="Cursos Extras" data={dataExtraCourses} />
    ),
  };

  useHandleKeyboard((key) => {
    if (key === "Escape") {
      navigate("/");
    }
  });

  return (
    <LayoutScreen
      screenTitle="INTRODUÇÃO"
      onReturn={() => navigate("/")}
      bg={Bg1}
    >
      <GridDefault
        left={
          <div className="flex flex-col justify-center items-start">
            <TitleSimpleMenu content="INFORMAÇÕES GERAIS" />

            <div className="mt-[20px]"></div>

            <ItemSimpleMenu
              level="1"
              onClick={() => setScreenSelected(AboutScreensEnum.Introduction)}
              content="INTRODUÇÃO"
            />

            <ItemSimpleMenu
              level="1"
              onClick={() => setScreenSelected(AboutScreensEnum.Professional)}
              content="PROFESSIONAL"
            />

            <ItemSimpleMenu
              level="1"
              onClick={() => setScreenSelected(AboutScreensEnum.Courses)}
              content="CURSOS"
            />

            <ItemSimpleMenu
              level="1"
              onClick={() => setScreenSelected(AboutScreensEnum.Studies)}
              content="ESTUDOS"
            />

            <div className="mt-[35px]"></div>

            <TitleSimpleMenu content="REDES SOCIAIS" />

            <div className="mt-[20px]"></div>

            <LinkExternal
              level="1"
              href="https://github.com/gabrielogregorio"
              content="github.com/gabrielogregorio"
              icon={dataIcons.github}
            ></LinkExternal>
            <LinkExternal
              level="1"
              href="https://twitter.com/gregoriodev"
              icon={dataIcons.twitter}
              content="twitter.com/gregoriodev"
            ></LinkExternal>

            <LinkExternal
              level="1"
              href="https://youtube.com/@gameplaysdiferenciadas"
              icon={dataIcons.youtube}
              content="youtube.com/@gameplaysdiferenciadas"
            ></LinkExternal>

            <LinkExternal
              level="1"
              href="https://linkedin.com/in/gabrielogregorio"
              icon={dataIcons.linkedin}
              content="linkedin.com/in/gabrielogregorio"
            ></LinkExternal>
          </div>
        }
        right={screenSelectedComponent[screenSelected]}
      />
    </LayoutScreen>
  );
};
