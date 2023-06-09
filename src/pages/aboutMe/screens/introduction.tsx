import { Text } from "ogregorio-component-library-studies";
import Profile from "../assets/profile.png";

export const AboutIntroductionScreen = () => {
  return (
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
          <p className="text-white font-roboto text-[1rem] font-bold">Olá,</p>

          <p className="text-white font-roboto text-[1rem] font-normal mt-[12px]">
            Sou o Gabriel Gregório, desenvolvedor frontend web.
          </p>

          <p className="text-white font-roboto text-[1rem] font-normal mt-[12px]">
            Sou brasilerio, tenho 24 anos e gosto muito de explorar as mais
            diversas áreas do desenvolvimento de softwares.
          </p>

          <p className="text-white font-roboto text-[1rem] font-normal mt-[12px]">
            Atualmente estou estudando microfrontend, e esse projeto é
            justamente um estudo, esse projeto envolve justamente isso, sim,
            esse portifolio é repleto de microfrontends
          </p>
        </div>
      </div>
    </div>
  );
};
