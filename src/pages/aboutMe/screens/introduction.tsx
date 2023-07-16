import { Text, TitleText } from 'ogregorio-component-library-studies';
import Profile from '../assets/profile.png';

export const AboutIntroductionScreen = () => {
  return (
    <div>
      <Text content="Introdução" />

      <div className="flex">
        <div>
          <img src={Profile} alt="foto do gabriel gregório" className="object-cover" />
        </div>
        <div className="flex-1 ml-[23px]">
          <Text content="Olá," />

          <Text content="Sou o Gabriel Gregório, desenvolvedor frontend web." />

          <Text
            content="Sou brasilerio, tenho 24 anos e gosto muito de explorar as mais
            diversas áreas do desenvolvimento de softwares."
          />

          <Text
            content="Atualmente estou estudando microfrontend, e esse projeto é
            justamente um estudo, esse projeto envolve justamente isso, sim,
            esse portifolio é repleto de microfrontends"
          />
        </div>
      </div>

      <div className="mt-[32px]">
        <TitleText content="Sobre esse projeto" />

        <Text content="A versão atual deste projeto foi fortemente inspirado no menu do Jogo The Last Of Us Part 1, que foi minha principal referência em layout, também usei alguns pontos do menu de Cyberpunk 2077 e Horizon Zero Dawn, além claro de um toque pessoal." />
        <Text content="Sobre a parte ténica, esse projeto foi divido em contextos, sendo um frontend que gerencia os demais, um que cuida da introdução e que envolve essa tela, a galeria e os reviews de jogos, um de utilitários, que cuida do gerenciador de tarefas, financeiro e guia ux." />
        <Text content="Essa divisão foi pensada para evitar o excesso de microfrontends, oque tinha aumentado e muito a complexidade nas primeiras versões." />
        <Text content="Com excessão do microfrontend que gerencia os demais que está publicado na Vercel, todos os demais são publicados no github pages, para evitar custos e facilitar manutenção." />
        <Text content="Além disso, temos duas bibliotecas publicadas no NPM, uma que cuidam de padronizar os estilos, linting e helpers, e uma biblioteca de componentes, que fornece a maioria dos componentes já respeitando os padrões de layout" />
      </div>
    </div>
  );
};
