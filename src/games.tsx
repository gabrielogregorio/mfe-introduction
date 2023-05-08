import cod4 from "./assets/games/cod4.png";
import crysis from "./assets/games/crysis.png";
import cyberpunk2077 from "./assets/games/cyberpunk2077.png";
import farcry3 from "./assets/games/farcry3.png";
import gta3 from "./assets/games/gta3.png";
import gtasa from "./assets/games/gtasa.png";
import guitarhero3 from "./assets/games/guitarhero3.png";
import horizonZeroDawn from "./assets/games/horizonZeroDawn.png";
import valorant from "./assets/games/valorant.png";
import { Link } from "react-router-dom";
import { BaseLayout } from "./baseLayout";

type ItemsProps = {
  images: string[];
  title: string;
  content: string;
  timeOfPlay?: string;
};

const Items = ({ images, title, content, timeOfPlay = "" }: ItemsProps) => {
  return (
    <BaseLayout>
      <header className="flex items-center justify-center gap-[20px]">
        <div className="min-w-[309px]">
          {images.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                width={309}
                height={174}
                alt=""
                className="h-[174px] w-[309px] object-cover"
              />
            );
          })}
        </div>

        <div className="text-[12px]">
          <h3 className="font-[600] text-[#333333]">
            {title} {timeOfPlay ? `- ${timeOfPlay}` : ""}
          </h3>
          <div className="font-[400] max-h-[147px] overflow-y-auto scrollbar">
            {content ? (
              <div>
                {content.split("\n").map((line, index) => {
                  if (line.trim()) {
                    return (
                      <p
                        key={index}
                        className="text-[12px] font-[400] text-[#333333]"
                      >
                        {line}
                      </p>
                    );
                  }
                  return <br key={index} />;
                })}
              </div>
            ) : undefined}
          </div>
        </div>
      </header>
    </BaseLayout>
  );
};

export const Games = () => {
  return (
    <div className="flex items-center justify-center mt-[78px]">
      <Link
        to={"/"}
        className="fixed top-1/2 left-0 h-[93px] w-[49px] hover:scale-110 transition-all duration-150 bg-[#F1F1F1] flex items-center justify-center rounded-tr-full rounded-br-full"
      >
        <div className="mr-2">
          <svg
            width="25"
            height="45"
            viewBox="0 0 25 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.39874 19.8957C0.0706177 21.3361 0.0706177 23.6754 1.39874 25.1158L18.3987 43.5533C19.7269 44.9938 21.8837 44.9938 23.2119 43.5533C24.54 42.1129 24.54 39.7736 23.2119 38.3332L8.61312 22.5L23.2012 6.6668C24.5294 5.22637 24.5294 2.88712 23.2012 1.44669C21.8731 0.0062561 19.7162 0.0062561 18.3881 1.44669L1.38812 19.8842L1.39874 19.8957Z"
              fill="#333333"
            />
          </svg>
        </div>
      </Link>
      <div className="max-w-[720px]">
        <section>
          <br />
          <h2 className="font-[600] text-[12px]">
            Alguns jogos que já zerei ou gosto muito
          </h2>

          <div className="flex flex-col gap-4">
            <Items
              title="Valorant"
              timeOfPlay="740 Horas"
              content={`Se você está em busca de tranquilidade, talvez o Valorant não seja a melhor opção. No entanto, se você já aceitou que os jogos de FPS podem ser desafiadores às vezes, então pode valer a pena experimentá-lo.

            O jogo é muito interessante e trás uma nova perspectiva para jogos FPS, a história do jogo também é muito interessante, contada principalmente através de vídeos no Youtube e eu fico muito feliz com todo o Carinho que a Riot Games colocou na Baiana Raze, minha duelista favorita. “Ai, tu broco”

Valorant tem muitos inúmeros problemas com a comunidade, de 'smurfs' a pessoas tóxicas, e não tem muito o que fazer, vários FPS também tem esse problema.

            Mesmo com tudo isso, eu realmente gosto de Valorant, é o meu FPS favorito atualmente.

            Na minha opinião, dou nota 10 ao Valorant pelo jogo em si descartando todos os problemas com a comunidade.
            `}
              images={[valorant]}
            />

            <Items
              timeOfPlay="52 horas"
              title="Cyberpunk 2077"
              content={`Embora o Cyberpunk 2077 seja notório pelos seus bugs, travamentos, problemas de salvamento, movimentação estranha e todos os outros pontos negativos amplamente conhecidos, eu ainda amo esse jogo no PC.

O jogo nos apresenta um mundo Cyberpunk incrível na perspectiva de primeira pessoa, com personagens memoráveis que despertaram em mim uma grande empatia, eu de fato me importei com eles durante as decisões e gameplay.

Você pode escolher se será o V ou a V, no caso, um protagonista masculino ou feminino, isso impacta em algumas missões e trás uma experiência diferente.

Além disso, como estamos no futuro, é bem comum implantes e mudanças no corpo, então você pode trocar um braço por exemplo, também pode colocar tatuagens, piercings, mudar cabelos, boca, naris, olhos, orelhas, face, etc.

Isso pode ter permitir fazer um personagem que se pareça com você, ou um personagem quase único, e de alguma forma isso, pelo menos no meu caso, me fez ter mais empatia pelo personagem, a final, não foi o personagem tal que passou por aquilo, foi o meu personagem, foi a minha versão, e isso é muito legal para a imersão.

Vou evitar comentar de bugs aqui, pois o jogo tem e muitos, em excesso. Além disso, tem vários aspectos Cyberpunk que me incomodam, mas, não critico, pois o jogo tem essa proposta, então, não vou considerar.

Infelizmente o jogo é bem limitado, por exemplo, não tem veículos aéreos facilmente usáveis, e nem um sistema de metro ou trem, mesmo isso existindo no jogo.

O jogo também é problemático no quesito da inteligência artificial, no geral ela é bem fraca, e bugada em vários casos.

As relações com as pessoas são um ponto forte e fraco ao mesmo tempo, o jogo tem personagens bem construidos, e outros nem tanto e estranhos.

Cyberpunk não é nem de longe uma história feliz, os finais tem consequência e a diferença entre eles é o quanto mais triste você fica.

A maior parte das coisas em Cyberpunk são pontos altos e baixos ao mesmo tempo, infelizmente, muito potencial foi desperdiçado.

Para mim, o Cyberpunk 2077 merece nota 9, poderia fácil ser o melhor jogo já lançado, se não fossem os problemas e os cortes na versão final.
            `}
              images={[cyberpunk2077]}
            />

            <Items
              timeOfPlay="47 horas"
              title="Horizon Zero Dawn"
              content={`Na minha opinião, Horizon Zero Dawn é um dos melhores jogos já criados. Ele apresenta personagens maravilhosos, jogabilidade incrível, ideias inovadoras e é um jogo extremamente polido, praticamente livre de bugs.

A protagonista, Aloy, é excepcional e, para mim, é a melhor de todos os games (sinto muito CJ), a história dela no início cria uma conexão muito grande, e como foi bem feito, particularmente me importei ainda mais com ela.

Considero Horizon Zero Dawn uma verdadeira obra-prima e estou louco para ter acesso aos mais recentes que por acaso eu já conheço toda a história, mas quero jogar mesmo assim.

Além da protagonista excelente, a ambientação é extraordinária, tudo é muito bem feito e fiquei horas e horas explorando os lugares mais aleatórios do jogo.

A dublagem em português brasileiro torna tudo muito melhor, deu para entender tudo, e isso com certeza ajuda na imersão (ouviu Rockstar).

Além de tudo isso, a história ainda é um ponto forte, para min, eu comprei toda a história do jogo, eu entendi e compreendi os acontecimentos do jogo, fez sentido para min.

Para ser ainda melhor, a protagonista combina com o ambiente e com a história, é muito interessante ver a Aloy se movimentando no ambiente e se camuflando com suas característas físicas e sendo encaixada na história de uma forma muito bem feita

É uma pena que o jogo não tenha alcançado um sucesso ainda maior, pois todo o esforço e dedicação empregados nele são notáveis. A Guerrilla Games ganhou o meu respeito máximo por criar essa obra prima.

Para mim, Horizon Zero Dawn merece nota 10 - um jogo perfeito
            `}
              images={[horizonZeroDawn]}
            />

            <Items
              timeOfPlay="39 horas"
              title="Far Cry 3"
              content={`Tenho muito carinho por esse game, ele abriu os caminhos para esse estilo de jogo, é muito bem feito, tem personagens cativantes, um vilão insano, e um final um pouco broxante na minha opinião, já que deixa algumas coisas implícitas.

Para min, esse é um jogo fantástico, tudo nele funciona muito bem, e para min é uma obra de arte também.

Para min, um 10, jogo muito bom, para a época, perfeito.`}
              images={[farcry3]}
            />

            <Items
              title="Call of Duty 4: Modern Warfare"
              timeOfPlay="27 horas"
              content={`Este jogo me trás muitas lembranças de raiva, pois, fui burro, e joguei a campanha toda no modo veterano, foi muito difícil para min nessa época, apanhei muito, mas consegui zera-lo.

O jogo tem vários momentos de guerra e tem cenários incríveis, que faz a gente se sentir em uma guerra de verdade, com a diferença que o personagem tem cura e você pode tentar novamente.

Para min, um 10, não é perfeito, mas tem seu publico e atende muito bem.
            `}
              images={[cod4]}
            />

            <Items
              title="GTA III"
              content={`Este é um dos melhores jogos já feito na história, não considerando os jogos atuais, mas sim para a época dessa maravilha, ele revolucionou a industria de games e mesmo hoje eu tenho muitas boas lembranças dessa maravilha.

O final é insano, e da uma conclusão para uma das melhores personagens do GTA San Andreas, lançado depois.

Para min, um 10, para a época dele, um jogo perfeito, revolucionário e o que deu origem aos GTA’s como conhecemos.`}
              images={[gta3]}
            />

            <Items
              title="GTA San Andreas"
              content={`Um dos meus jogos favoritos já lançados, e que conseguiu ficar ainda melhor com o tempo, principalmente com os canais brasileiros de GTA San Andreas.

Personagens incríveis, cenários extraordinários, radios maravilhosas, e um protagonista memorável e que provou que a Rockstar poderia se superar.

Para min, um 10, tanto para aquela época, quanto para a de 2023.
            `}
              images={[gtasa]}
            />

            <Items
              title="Guitar Hero III: Legends of Rock"
              timeOfPlay="27 horas"
              content={`Mais um jogo que tenho muito carinho, só fui jogar ele a pouco tempo em um emulador de PS2, e é um jogo maravilhoso e divertido

Recomendo começar com dificuldade baixa e ir evoluindo a cada vez que você zerar, pelo menos para min que não estava acostumado no controle, foi bem complicado no inicio.

Para min, um 10`}
              images={[guitarhero3]}
            />

            <Items
              title="Crysis"
              content={`Esse jogo na verdade não tem muita coisa em especial, mas, me atraiu muito o ambiente e personagem com suas habilidades insanas.

Consegui rodar esse game com todos os gráficos no mínimo, e em uma das ultimas missões tive que fazer olhando para o chão e ficando atrás de uma caixa, pois se eu olhasse para a luz, o notebook não aguentava.

De qualquer forma, o jogo tem o seu valor e é incrível também.

Para min, um 8, pela má otimização e decisões de história questionáveis`}
              images={[crysis]}
            />
          </div>
        </section>

        <div className="h-[390px]"></div>
      </div>
    </div>
  );
};
