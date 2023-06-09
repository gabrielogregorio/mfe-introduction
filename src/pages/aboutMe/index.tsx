import Bg1 from "../../assets/bg1.webp";
import { dataIcons } from "./dataIcons";
import { LinkNavigation } from "../../common/linkNavigation";
import { ReturnToHome } from "../../common/returnToHome";
import { useNavigate } from "react-router-dom";
import { ReactNode, useState } from "react";
import { AboutIntroductionScreen } from "./screens/introduction";
import { ModelListScreen } from "./screens/modelScreenList";
import { dataStudies } from "./dataStudies";
import { dataJob } from "./dataJobs";
import { dataExtraCourses } from "./dataExtraCourses";
import {
  ButtonWithSound,
  NavigationLevel,
  NavigationSpace,
  Text,
  Breadcrumb,
  TextVariantEnum,
  useHandleKeyboard,
} from "ogregorio-component-library-studies";

enum AboutScreensEnum {
  "Introduction" = "Introduction",
  "Professional" = "Professional",
  "Studies" = "Studies",
  "Courses" = "Courses",
}

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
    <div className="relative min-h-[100vh] max-h-[100vh] h-full max-w-[100vw] w-full">
      <div className="absolute h-screen w-screen top-0 left-0 z-10">
        <img src={Bg1} className=" w-[100vw] h-[100vh] object-cover" alt="" />
      </div>
      <div className="absolute h-screen w-screen max-h-screen max-w-screen top-0 left-0 z-20 bg-black/80 animate-fadeInDrop transition-all duration-200 pt-[80px] px-[90px] flex flex-col">
        <Breadcrumb content="PERFIL" />

        <div className="flex gap-6 mt-[64px] animate-fadeIn  max-h-full overflow-y-hidden px-[2rem]">
          <div className="flex-1 overflow-y-scroll scrollbar">
            <h2>
              <Text variant={TextVariantEnum.textTitle}>
                INFORMAÇÔES GERAIS
              </Text>
            </h2>

            <div>
              <NavigationLevel level={1}>
                <div className="flex flex-col items-start gap-[12px] mt-[17px]">
                  <NavigationSpace>
                    <ButtonWithSound
                      onClick={() =>
                        setScreenSelected(AboutScreensEnum.Introduction)
                      }
                      isActive={
                        screenSelected === AboutScreensEnum.Introduction
                      }
                      content="INTRODUÇÃO"
                    />
                  </NavigationSpace>

                  <NavigationSpace>
                    <ButtonWithSound
                      onClick={() =>
                        setScreenSelected(AboutScreensEnum.Professional)
                      }
                      isActive={
                        screenSelected === AboutScreensEnum.Professional
                      }
                      content="PROFESSIONAL"
                    />
                  </NavigationSpace>

                  <NavigationSpace>
                    <ButtonWithSound
                      onClick={() =>
                        setScreenSelected(AboutScreensEnum.Courses)
                      }
                      isActive={screenSelected === AboutScreensEnum.Courses}
                      content="CURSOS"
                    />
                  </NavigationSpace>

                  <NavigationSpace>
                    <ButtonWithSound
                      onClick={() =>
                        setScreenSelected(AboutScreensEnum.Studies)
                      }
                      isActive={screenSelected === AboutScreensEnum.Studies}
                      content="ESTUDOS"
                    />
                  </NavigationSpace>

                  <NavigationSpace>
                    <ButtonWithSound isActive={false} content="REDES SOCIAIS" />
                  </NavigationSpace>

                  <NavigationLevel level={2}>
                    <div className="flex flex-col gap-[12px]">
                      <NavigationSpace>
                        <LinkNavigation
                          href="https://github.com/gabrielogregorio"
                          icon={dataIcons.github}
                        >
                          github.com/gabrielogregorio
                        </LinkNavigation>
                      </NavigationSpace>

                      <NavigationSpace>
                        <LinkNavigation
                          href="https://twitter.com/gregoriodev"
                          icon={dataIcons.twitter}
                        >
                          twitter.com/gregoriodev
                        </LinkNavigation>
                      </NavigationSpace>

                      <NavigationSpace>
                        <LinkNavigation
                          href="https://youtube.com/@gameplaysdiferenciadas"
                          icon={dataIcons.youtube}
                        >
                          youtube.com/@gameplaysdiferenciadas
                        </LinkNavigation>
                      </NavigationSpace>

                      <NavigationSpace>
                        <LinkNavigation
                          href="https://linkedin.com/in/gabrielogregorio"
                          icon={dataIcons.linkedin}
                        >
                          linkedin.com/in/gabrielogregorio
                        </LinkNavigation>
                      </NavigationSpace>
                    </div>
                  </NavigationLevel>
                </div>
              </NavigationLevel>
            </div>
            <div className="h-[5rem]"></div>
          </div>
          <div className="flex-1 overflow-y-scroll scrollbar px-[2rem]">
            <div>{screenSelectedComponent[screenSelected]}</div>
            <div className="h-[15rem]"></div>
          </div>
        </div>

        <ReturnToHome />
      </div>
    </div>
  );
};
