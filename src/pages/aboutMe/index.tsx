import Bg1 from "../../assets/bg1.webp";
import { Text } from "../../common/Text";
import { dataIcons } from "./dataIcons";
import Profile from "./assets/profile.png";
import { NavigationLevel } from "../../common/navigationLevel";
import { LinkNavigation } from "../../common/linkNavigation";
import { NavigationSpace } from "../../common/navigationSpace";
import { Breadcrumb } from "../../common/breacrumb";
import { ReturnToHome } from "../../common/returnToHome";
import { ButtonWithSound } from "../../common/buttonWithSound";

export const About = () => {
  return (
    <div className="relative min-h-[100vh] max-h-[100vh] h-full max-w-[100vw] w-full">
      <div className="absolute h-screen w-screen top-0 left-0 z-10">
        <img src={Bg1} className=" w-[100vw] h-[100vh] object-cover" alt="" />
      </div>
      <div className="absolute h-screen w-screen top-0 left-0 z-20 bg-black/80 animate-fadeInDrop transition-all duration-200 pt-[80px] px-[90px] flex flex-col">
        <Breadcrumb content="PERFIL" />

        <div className="grid grid-cols-2 mt-[64px]  animate-fadeIn">
          <div>
            <h2>
              <Text fontSize="text-[24px]">INFORMAÇÔES GERAIS</Text>
            </h2>

            <NavigationLevel level={1}>
              <div className="flex flex-col items-start gap-[12px] mt-[17px]">
                <NavigationSpace>
                  <ButtonWithSound isActive={true} content="INTRODUÇÃO" />
                </NavigationSpace>

                <NavigationSpace>
                  <ButtonWithSound isActive={false} content="ESTUDOS" />
                </NavigationSpace>

                <NavigationSpace>
                  <ButtonWithSound isActive={false} content="PROFESSIONAL" />
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
          <div>
            <Text>Introdução</Text>

            <div className="grid grid-cols-2">
              <div>
                <img
                  src={Profile}
                  alt="foto do gabriel gregório"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white font-roboto text-[1rem] font-bold">
                  Olá,
                </p>

                <p className="text-white font-roboto text-[1rem] font-normal mt-[12px]">
                  Sou o Gabriel Gregório, desenvolvedor frontend web.
                </p>

                <p className="text-white font-roboto text-[1rem] font-normal mt-[12px]">
                  Sou brasilerio, gosto muito de explorar as mais diversas áreas
                  do desenvolvimento de softwares, e este projeto inteiro tem
                  esse objetivo, neste caso, explorar microfrontends. Sim, o que
                  você está vendo aqui, foi criado com base em microrfontends.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ReturnToHome />
      </div>
    </div>
  );
};
