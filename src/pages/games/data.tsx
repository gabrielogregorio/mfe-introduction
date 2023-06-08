import { ReactNode } from "react";

export type dataGamesType = {
  video: string[];
  imagens: ReactNode[];
  name: string;
  available: number;
  content: ReactNode;
  id: string;
};

import HorizonZeroDawn from "./assets/horizon.png";
import Cyberpunk from "./assets/c2077.png";
import Valorant from "./assets/valorant.png";
import cod4 from "./assets/cod4.jpg";
import crysis from "./assets/crysis.jpg";
import guitarhero from "./assets/guitarhero.jpg";
import farcry3 from "./assets/farcry3.jpg";
import gtasa from "./assets/gtasa.jpg";
import gta3 from "./assets/gta3.webp";

export const dataGames: dataGamesType[] = [
  {
    id: "1",
    name: "Horizon Zero Dawn",
    available: 10,
    imagens: [
      <img
        alt=""
        src={HorizonZeroDawn}
        width={1100}
        height={620}
        className="max-w-[1100px] max-h-[400px] h-full w-full object-cover hover:scale-125 cursor-pointer transition-all duration-150 hover:rotate-2"
      />,
    ],
    video: [
      "lar4Ayokpzc",
      "X7RDKkTGDUw",
      "2lbZnXbSQ4U",
      "efNspUEPak0",
      "WCMdHMWg-Uw",
    ],
    content: (
      <section>
        <div className="max-w-[1320px] w-full bg-[#2A2D3E] px-[120px] py-[25px]">
          <h1 className="text-[36px] text-white font-semibold">
            Horizon Zero Dawn
          </h1>

          <p className="text-white text-[14px] font-normal">
            Atualmente tenho 47 horas de gameplay nessa obra de arte, na minha
            experiência, Horizon Zero Dawn é um dos melhores jogos já criados,
            tudo é muito bem feito, a Aloy é cativante, os ambientes são
            perfeitos, as motivações são interessantes, a história é
            extremamente bem feita e coesa e a introdução é espetacular, é um
            tutorial extreamente rico em história e contexto.
          </p>

          <p>
            Para min um grande ponto negativo é o tempo imenso para que o jogo
            seja carregado, o que faz eu pensar duas vezes antes de abrir o jogo
          </p>

          <p>
            Eu gostei muito das teclas usadas, estava bem em cima onde meus
            dedos esperavam
          </p>

          <p>A ambientação é perfeita</p>

          <p className="text-white text-[14px] font-normal">
            Tanto pela excelente dublagem em português, quanto pelo carinho que
            a Guerrila games colocou nesse jogo, esse foi o jogo em que eu mais
            sabia o que estava acontecendo ao meu redor, tudo estava claro, e a
            minha curiosidade avançava com a Aloy
          </p>

          <p className="text-white text-[14px] font-normal">
            Possivelmente eu poderia ficar horas e horas elogiando esse jogo,
            mas, para não enrolar, para min esse jogo é nota 10, tenho dor no
            coração em saber que muitas pessoas não aproveitaram essa obra de
            arte, queria muito que mais pessoas experimentassem esse jogo.
          </p>
        </div>
      </section>
    ),
  },
  {
    id: "2",
    name: "Cyberpunk 2077",
    available: 10,
    imagens: [
      <img
        alt=""
        src={Cyberpunk}
        width={1100}
        height={620}
        className="max-w-[1100px] max-h-[400px] h-full w-full object-cover hover:scale-125 cursor-pointer transition-all duration-150 hover:rotate-2"
      />,
    ],
    video: ["mtSmAqwiuKY", "dd0XckIHKFY"],
    content: (
      <section>
        <div className="max-w-[1320px] w-full bg-[#2A2D3E] px-[120px] py-[25px]">
          <h1 className="text-[36px] text-white font-semibold">
            Cyberpunk 2077
          </h1>

          <p className="text-white text-[14px] font-normal">
            Embora o Cyberpunk 2077 seja notório pelos seus bugs, travamentos,
            problemas de salvamento, movimentação estranha e todos os outros
            pontos negativos amplamente conhecidos, eu ainda amo esse jogo no
            PC.
          </p>

          <p>mais aprendizados</p>

          <p className="text-white text-[14px] font-normal">
            O jogo nos apresenta um mundo Cyberpunk incrível na perspectiva de
            primeira pessoa, com personagens memoráveis que despertaram em mim
            uma grande empatia, eu de fato me importei com eles durante as
            decisões e gameplay, e toda a ambientação e conexões são muito bem
            feitas.
          </p>

          <p className="text-white text-[14px] font-normal">
            Você pode escolher se será o V ou a V, no caso, um protagonista
            masculino ou feminino, isso impacta em algumas missões e trás uma
            experiência diferente principalmente em relacionamentos.
          </p>

          <p className="text-white text-[14px] font-normal">
            Além disso, como estamos no futuro, é bem comum implantes e mudanças
            no corpo, então você pode trocar um braço por exemplo, também pode
            colocar tatuagens, piercings, fazer implantes de computadores, mudar
            cabelos, boca, naris, olhos, orelhas, face, etc.
          </p>

          <p className="text-white text-[14px] font-normal">
            Isso pode ter permitir fazer um personagem que se pareça com você,
            ou um personagem quase único, e de alguma forma isso, pelo menos no
            meu caso, me fez ter mais empatia pelo personagem, a final, não foi
            o personagem tal que passou por aquilo, foi o meu personagem, foi a
            minha versão, e isso é muito legal para a imersão.
          </p>

          <p className="text-white text-[14px] font-normal">
            Vou evitar comentar de bugs aqui, pois o jogo tem e muitos, em
            excesso, e sim, em 2023 ainda tem missões bugadas. Além disso, tem
            vários aspectos Cyberpunk que me incomodam muito, mas, não
            considero, pois o jogo tem essa proposta, então, não vou considerar.
          </p>

          <p className="text-white text-[14px] font-normal">
            Infelizmente o jogo é bem limitado, por exemplo, não tem veículos
            aéreos facilmente usáveis, e nem um sistema de metro ou trem, mesmo
            isso existindo no jogo e sendo mostrado nos trailers do jogo.
          </p>

          <p className="text-white text-[14px] font-normal">
            O jogo também é problemático no quesito da inteligência artificial,
            no geral ela é bem fraca, e bugada em vários casos.
          </p>

          <p className="text-white text-[14px] font-normal">
            As relações com as pessoas são um ponto forte e fraco ao mesmo
            tempo, o jogo tem personagens bem construidos e cenas maravilhosas,
            e outros nem tanto e estranhos. Outro problema foi a dublagem, mesmo
            ela sendo bem interessante, para min foi fácil perder a imersão
            ouvir a voz de outros dubladores que eu conhecia. Ainda na dublagem,
            o jogo tem vários palavrões e memes que quebram a a imersão..
          </p>

          <p className="text-white text-[14px] font-normal">
            Cyberpunk não é nem de longe uma história feliz, os finais tem
            consequência e a diferença entre eles é o quanto mais triste você
            fica. Meu primeiro final, achei que seria o com menos consequências,
            e me arrependi quando vi no que desenrolou, depois fiz outros finais
            também.
          </p>

          <p className="text-white text-[14px] font-normal">
            A maior parte das coisas em Cyberpunk são pontos altos e baixos ao
            mesmo tempo, infelizmente, muito potencial foi desperdiçado, para
            min esse jogo poderia ser um dos melhores jogos já feitos,
            infelizmente, são muitos problemas.
          </p>

          <p className="text-white text-[14px] font-normal">
            Mesmo com todos esses problemas, eu acho que Cyberpunk merece um 9,
            mesmo com todos os problemas, o jogo tem uma cidade incrível e
            unica, tem personagens cativantes, cenas de arrepiar, cenas nogentas
            (extremamente bem feitas), tem uma otimização surreal e tem
            mecânicas incríveis que permitem o personagem fazer muitas coisas
            extraordinárias. Estou louco para um Cyberpunk 2077 parte 2.
          </p>
        </div>
      </section>
    ),
  },

  {
    id: "3",
    name: "Valorant",
    available: 10,
    imagens: [
      <img
        alt=""
        src={Valorant}
        width={1100}
        height={620}
        className="max-w-[1100px] max-h-[400px] h-full w-full object-cover hover:scale-125 cursor-pointer transition-all duration-150 hover:rotate-2"
      />,
    ],
    content: (
      <section>
        <div className="max-w-[1320px] w-full bg-[#2A2D3E] px-[120px] py-[25px]">
          <h1 className="text-[36px] text-white font-semibold">
            Valorant - 740 horas
          </h1>

          <p className="text-white text-[14px] font-normal">
            Se você está em busca de tranquilidade, talvez o Valorant não seja a
            melhor opção. No entanto, se você já aceitou que os jogos de FPS
            podem ser desafiadores às vezes, então pode valer a pena
            experimentá-lo.
          </p>

          <p></p>

          <p className="text-white text-[14px] font-normal">
            O jogo é muito interessante e trás uma nova perspectiva para jogos
            FPS, a história do jogo é legal, contada principalmente através de
            vídeos no Youtube e eu fico muito feliz com todo o Carinho que a
            Riot Games colocou na Baiana Raze, minha duelista favorita. “Ai, tu
            broco”
          </p>

          <p className="text-white text-[14px] font-normal">
            Valorant tem muitos inúmeros problemas com a comunidade, de 'smurfs'
            a pessoas tóxicas, e não tem muito o que fazer, vários FPS também
            tem esse problema e no Valorant não é diferente, se não pior.
          </p>

          <p className="text-white text-[14px] font-normal">
            Mesmo com tudo isso, eu realmente gosto de Valorant, é o meu FPS
            favorito atualmente.
          </p>

          <p className="text-white text-[14px] font-normal">
            Na minha opinião, dou nota 10 ao Valorant pelo jogo em si
            descartando todos os problemas com a comunidade.
          </p>
        </div>
      </section>
    ),
    video: [
      "4jNKWj-JYjY",
      "a4ccvu52uDY",
      "yH2Oip06klQ",
      "8MwJ2ZABa2I",
      "sE3UqyzKR30",
      "UHFha439Rt8",
      "mQgK_U5A0Ws",
      "m3Pd8GoBFi8",
      "X2TSeT-0XyY",
      "vQqU0F8vTOE",
      "Pka9k_elCkA",
      "L36C5IoA0KA",
    ],
  },

  {
    id: "4",
    name: "Far Cry 3",
    available: 10,
    imagens: [
      <img
        alt=""
        src={farcry3}
        width={1100}
        height={620}
        className="max-w-[1100px] max-h-[400px] h-full w-full object-cover hover:scale-125 cursor-pointer transition-all duration-150 hover:rotate-2"
      />,
    ],
    video: ["Jn2njSaD4dk", "1uAPIickjPg"],
    content: (
      <section>
        <div className="max-w-[1320px] w-full bg-[#2A2D3E] px-[120px] py-[25px]">
          <h1 className="text-[36px] text-white font-semibold">Far Cry 3</h1>

          <p className="text-white text-[14px] font-normal">
            Tenho muito carinho por esse game, ele abriu os caminhos para esse
            estilo de jogo, é muito bem feito, tem personagens cativantes, um
            vilão insano.
          </p>

          <p>
            Um dos aprendizados que tive é que você precisa de recompensar o
            jogador quando ele cumpre um desafio, exemplo, subir em uma
            montanha. Em diversos momentos eu subia em uma montanha querendo
            achar uma asa delta, e na maioria das vezes, elas estava lá, o que
            foi uma sensação muito boa
          </p>

          <p className="text-white text-[14px] font-normal">
            O final do jogo para min é muito ruim, já que deixa algumas coisas
            implícitas e não deixa a gente se certificar que acabou, o que não
            faz sentido nenhum considerando tudo o que o personagem passou.
          </p>

          <p className="text-white text-[14px] font-normal">
            Para min, esse é um jogo fantástico, tudo nele funciona muito bem
            (tirando o final), e para min é uma obra de arte também.
          </p>

          <p className="text-white text-[14px] font-normal">
            Para min, um 10, jogo muito bom, para a época, apesar do final
          </p>
        </div>
      </section>
    ),
  },

  {
    id: "4",
    name: "GTA San Andreas",
    available: 10,
    imagens: [
      <img
        alt=""
        src={gtasa}
        width={1100}
        height={620}
        className="max-w-[1100px] max-h-[400px] h-full w-full object-cover hover:scale-125 cursor-pointer transition-all duration-150 hover:rotate-2"
      />,
    ],
    video: ["AlEPVloclBw"],
    content: (
      <section>
        <div className="max-w-[1320px] w-full bg-[#2A2D3E] px-[120px] py-[25px]">
          <h1 className="text-[36px] text-white font-semibold">
            GTA San Andreas
          </h1>
          <p className="text-white text-[14px] font-normal">
            Um dos meus jogos favoritos já lançados, e que conseguiu ficar ainda
            melhor com o tempo, principalmente com os canais brasileiros de GTA
            San Andreas.
          </p>
          <p className="text-white text-[14px] font-normal">
            Personagens incríveis, cenários extraordinários, radios
            maravilhosas, e um protagonista memorável e que provou que a
            Rockstar poderia superar o GTA 3 e os anteriores.
          </p>
          <p className="text-white text-[14px] font-normal">
            Até hoje (2023), o jogo é incrível, e recheado de coisas para fazer,
            o que tornam ainda melhor.
          </p>

          <p className="text-white text-[14px] font-normal">
            Para min, um 10, tanto para aquela época, quanto para a de 2023.
          </p>
        </div>
      </section>
    ),
  },
  {
    id: "5",
    name: "GTA 3",
    available: 10,
    imagens: [
      <img
        alt=""
        src={gta3}
        width={1100}
        height={620}
        className="max-w-[1100px] max-h-[400px] h-full w-full object-cover hover:scale-125 cursor-pointer transition-all duration-150 hover:rotate-2"
      />,
    ],
    content: (
      <section>
        <div className="max-w-[1320px] w-full bg-[#2A2D3E] px-[120px] py-[25px]">
          <h1 className="text-[36px] text-white font-semibold">GTA 3</h1>

          <p className="text-white text-[14px] font-normal">
            Este é um dos melhores jogos já feito na história, não considerando
            os jogos atuais, mas sim para a época dessa maravilha, ele
            revolucionou a industria de games e mesmo hoje eu tenho muitas boas
            lembranças dessa obra de arte.
          </p>
          <p className="text-white text-[14px] font-normal">
            O final é insano, e da uma conclusão para uma das melhores
            personagens do GTA San Andreas, lançado depois.
          </p>
          <p className="text-white text-[14px] font-normal">
            Para min, um 10, para a época dele, um jogo perfeito, revolucionário
            e o que deu origem aos GTA’s como conhecemos. Atualmente bastante
            coisa incomoda no jogo, mas sempre que jogo, considero o periodo que
            ele foi lançado e as limitações da época
          </p>
        </div>
      </section>
    ),
    video: ["PtbUORusNvo", "NbRxQt4zZBU"],
  },

  {
    id: "6",
    name: "Call of Duty 4: Modern Warfare",
    available: 10,
    imagens: [
      <img
        alt=""
        src={cod4}
        width={1100}
        height={620}
        className="max-w-[1100px] max-h-[400px] h-full w-full object-cover hover:scale-125 cursor-pointer transition-all duration-150 hover:rotate-2"
      />,
    ],
    video: ["bI1pVc0XJDI", "l-eMi1xJ2dM"],
    content: (
      <section>
        <div className="max-w-[1320px] w-full bg-[#2A2D3E] px-[120px] py-[25px]">
          <h1 className="text-[36px] text-white font-semibold">
            Call of Duty 4: Modern Warfare 27 horas
          </h1>

          <p className="text-white text-[14px] font-normal">
            Este jogo me trás muitas lembranças de raiva, pois, fui burro, e
            joguei a campanha toda no modo veterano, foi muito difícil para min
            nessa época, apanhei muito, mas consegui zera-lo.
          </p>

          <p className="text-white text-[14px] font-normal">
            A missão em Chernobyl mesmo, a qual ficamos cercados após o ataque
            com sniper, consegui passar por todos os soldados usando flash
            bangs, estourando 3 em momentos especificos enquanto corria entre
            eles, foi a unica forma que consegui passar dessa fase, isso, após
            tentar diversas vezes enfrentar todos e descarregar TODAS as minhas
            balas de todas as armas. O jogo tem esse tipo de problema com spawn
            infinito ao que parece.
          </p>

          <p className="text-white text-[14px] font-normal">
            O jogo tem vários momentos de guerra e tem cenários incríveis, que
            faz a gente se sentir em uma guerra de verdade, com a diferença que
            o personagem tem cura e você pode tentar novamente rs, na vida real
            eu teria ido para o ralo no comecinho.
          </p>

          <p className="text-white text-[14px] font-normal">
            Para min, um 10, não é perfeito, mas tem seu publico e atende muito
            bem, meus problemas foram devido dificuldade que não me atentei, e
            tudo ficou mais complicado.
          </p>
        </div>
      </section>
    ),
  },
  {
    id: "7",
    name: "Guitar Hero III",
    available: 10,
    imagens: [
      <img
        alt=""
        src={guitarhero}
        width={1100}
        height={620}
        className="max-w-[1100px] max-h-[400px] h-full w-full object-cover hover:scale-125 cursor-pointer transition-all duration-150 hover:rotate-2"
      />,
    ],
    video: ["A08XyvU04rQ"],
    content: (
      <section>
        <div className="max-w-[1320px] w-full bg-[#2A2D3E] px-[120px] py-[25px]">
          <h1 className="text-[36px] text-white font-semibold">
            Guitar Hero III: Legends of Rock 27 horas
          </h1>
          <p className="text-white text-[14px] font-normal">
            Mais um jogo que tenho muito carinho, só fui jogar ele a pouco tempo
            em um emulador de PS2, e é um jogo maravilhoso e divertido
          </p>
          <p>
            Acho que a qualidade das musicas é um diferencial importante, pois a
            maioria das musicas são bem interessantes.
          </p>
          <p>
            Os detalhes musicais foram bem feitos, mesmo que o clique meu
            represente apenas um toque da musica, sendo que em um segundo ela
            pode ter vários toques, o toque foi bem encaixado, de uma forma que
            parece
          </p>
          <p className="text-white text-[14px] font-normal">
            Recomendo começar com dificuldade baixa e ir evoluindo a cada vez
            que você zerar, pelo menos para min que não estava acostumado no
            controle, foi bem complicado no inicio até no fácil.
          </p>
          <p className="text-white text-[14px] font-normal"></p>
          Para min, um 10
        </div>
      </section>
    ),
  },
  {
    id: "8",
    name: "Crysis 1 Original",
    available: 7,
    video: ["SXViTxTYqmw"],
    imagens: [
      <img
        alt=""
        src={crysis}
        width={1100}
        height={620}
        className="max-w-[1100px] max-h-[400px] h-full w-full object-cover hover:scale-125 cursor-pointer transition-all duration-150 hover:rotate-2"
      />,
    ],
    content: (
      <section>
        <div className="max-w-[1320px] w-full bg-[#2A2D3E] px-[120px] py-[25px]">
          <h1 className="text-[36px] text-white font-semibold">
            Crysis 1 Original
          </h1>

          <p className="text-white text-[14px] font-normal">
            Esse jogo na verdade não tem muita coisa em especial, mas, me atraiu
            muito o ambiente e personagem com suas habilidades insanas.
          </p>

          <p className="text-white text-[14px] font-normal">
            Consegui rodar esse game com todos os gráficos no mínimo, e em uma
            das ultimas missões tive que fazer olhando para o chão e ficando
            atrás de uma caixa, pois se eu olhasse para a luz, o notebook não
            aguentava e crashava.
          </p>

          <p className="text-white text-[14px] font-normal">
            De qualquer forma, o jogo tem o seu valor e é incrível também.
          </p>

          <p className="text-white text-[14px] font-normal">
            Para min, um 7, pela má otimização e decisões de história
            questionáveis, várias vezes eu tinha a percepção de ter algo me
            limitando (o mundo aberto falso), e decisões do tipo, agora você tem
            que entrar no portal rumo a sua morte porque agora tem uma parede
            invisível que surgiu do nada atrás de você, e eu sem entender nada e
            indignado com a situação.
          </p>
        </div>
      </section>
    ),
  },
];
