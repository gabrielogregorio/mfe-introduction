import { ReactNode } from "react";

export type dataGamesType = {
  name: string;
  classificação:
    | "obra de prima"
    | "excelente"
    | "muito bom"
    | "ok"
    | "jogando...";
  id: string;

  conteudo: {
    title: string;
    media: {
      youtube?: string;
      imagem?: string;
    };
    description: ReactNode;
  }[];
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

import theLastOfUs from "./assets/the last of us.webp";
import theLastOfUsOlharLocalApontado from "./assets/featureOlharLocalApontado.webp";
import { TextLarge } from "../../common/textLarge";

export const dataGames: dataGamesType[] = [
  {
    id: "10",
    name: "The Last Of US",
    classificação: "jogando...",
    conteudo: [
      {
        title: "Uma de imagem The Last Of US",
        description: (
          <div>
            <TextLarge>
              Ainda jogando, mas essa foi uma das cenas bem triste
            </TextLarge>
          </div>
        ),

        media: {
          imagem: theLastOfUs,
        },
      },
      {
        title: "uma feature muito legal desse jogo",
        description: (
          <TextLarge>
            Basicamente quando você está olhando para uma direção qualquer e
            algum personagem mostra alguma coisa, como a direção onde devemos
            ir, aparece essa opção, que faz o personagem olhar para o objetivo.
            Essa feature é fantastica, ainda mais para min que sempre tento
            pegar tudo que tem ao redor
          </TextLarge>
        ),
        media: {
          imagem: theLastOfUsOlharLocalApontado,
        },
      },
    ],
  },
  {
    id: "9",
    name: "Horizon Zero Dawn",
    classificação: "obra de prima",
    conteudo: [
      {
        title: "Uma imagem dessa obra prima",
        description: (
          <section>
            <TextLarge>
              Atualmente tenho 47 horas de gameplay nessa obra de arte, na minha
              experiência, Horizon Zero Dawn é um dos melhores jogos já criados,
              tudo é muito bem feito, a Aloy é cativante, os ambientes são
              perfeitos, as motivações são interessantes, a história é
              extremamente bem feita e coesa e a introdução é espetacular, é um
              tutorial extreamente rico em história e contexto.
            </TextLarge>

            <TextLarge>
              Para min um grande ponto negativo é o tempo imenso para que o jogo
              seja carregado, o que faz eu pensar duas vezes antes de abrir o
              jogo
            </TextLarge>

            <TextLarge>
              Eu gostei muito das teclas usadas, estava bem em cima onde meus
              dedos esperavam
            </TextLarge>

            <TextLarge>A ambientação é perfeita</TextLarge>

            <TextLarge>
              Tanto pela excelente dublagem em português, quanto pelo carinho
              que a Guerrila games colocou nesse jogo, esse foi o jogo em que eu
              mais sabia o que estava acontecendo ao meu redor, tudo estava
              claro, e a minha curiosidade avançava com a Aloy
            </TextLarge>

            <TextLarge>
              Possivelmente eu poderia ficar horas e horas elogiando esse jogo,
              mas, para não enrolar, para min esse jogo é nota 10, tenho dor no
              coração em saber que muitas pessoas não aproveitaram essa obra de
              arte, queria muito que mais pessoas experimentassem esse jogo.
            </TextLarge>
          </section>
        ),
        media: {
          imagem: HorizonZeroDawn,
        },
      },
      {
        title: "Um cover perfeito da Alina Gingertail",
        description: "",
        media: {
          youtube: "X7RDKkTGDUw",
        },
      },
      {
        title: "Uma edição que ficou perfeita da comunidade",
        description: "",
        media: {
          youtube: "2lbZnXbSQ4U",
        },
      },
      {
        title: "Um vídeo meu andando as Ruinas dos antigos",
        description: "",
        media: {
          youtube: "WCMdHMWg-Uw",
        },
      },
    ],
  },
  {
    id: "8",
    name: "Cyberpunk 2077",
    classificação: "excelente",
    conteudo: [
      {
        title: "Uma imagem da comunidade de Cyberpunk 2077",
        description: (
          <section>
            <TextLarge>
              Embora o Cyberpunk 2077 seja notório pelos seus bugs, travamentos,
              problemas de salvamento, movimentação estranha e todos os outros
              pontos negativos amplamente conhecidos, eu ainda amo esse jogo no
              PC.
            </TextLarge>

            <TextLarge>mais aprendizados</TextLarge>

            <TextLarge>
              O jogo nos apresenta um mundo Cyberpunk incrível na perspectiva de
              primeira pessoa, com personagens memoráveis que despertaram em mim
              uma grande empatia, eu de fato me importei com eles durante as
              decisões e gameplay, e toda a ambientação e conexões são muito bem
              feitas.
            </TextLarge>

            <TextLarge>
              Você pode escolher se será o V ou a V, no caso, um protagonista
              masculino ou feminino, isso impacta em algumas missões e trás uma
              experiência diferente principalmente em relacionamentos.
            </TextLarge>

            <TextLarge>
              Além disso, como estamos no futuro, é bem comum implantes e
              mudanças no corpo, então você pode trocar um braço por exemplo,
              também pode colocar tatuagens, piercings, fazer implantes de
              computadores, mudar cabelos, boca, naris, olhos, orelhas, face,
              etc.
            </TextLarge>

            <TextLarge>
              Isso pode ter permitir fazer um personagem que se pareça com você,
              ou um personagem quase único, e de alguma forma isso, pelo menos
              no meu caso, me fez ter mais empatia pelo personagem, a final, não
              foi o personagem tal que passou por aquilo, foi o meu personagem,
              foi a minha versão, e isso é muito legal para a imersão.
            </TextLarge>

            <TextLarge>
              Vou evitar comentar de bugs aqui, pois o jogo tem e muitos, em
              excesso, e sim, em 2023 ainda tem missões bugadas. Além disso, tem
              vários aspectos Cyberpunk que me incomodam muito, mas, não
              considero, pois o jogo tem essa proposta, então, não vou
              considerar.
            </TextLarge>

            <TextLarge>
              Infelizmente o jogo é bem limitado, por exemplo, não tem veículos
              aéreos facilmente usáveis, e nem um sistema de metro ou trem,
              mesmo isso existindo no jogo e sendo mostrado nos trailers do
              jogo.
            </TextLarge>

            <TextLarge>
              O jogo também é problemático no quesito da inteligência
              artificial, no geral ela é bem fraca, e bugada em vários casos.
            </TextLarge>

            <TextLarge>
              As relações com as pessoas são um ponto forte e fraco ao mesmo
              tempo, o jogo tem personagens bem construidos e cenas
              maravilhosas, e outros nem tanto e estranhos. Outro problema foi a
              dublagem, mesmo ela sendo bem interessante, para min foi fácil
              perder a imersão ouvir a voz de outros dubladores que eu conhecia.
              Ainda na dublagem, o jogo tem vários palavrões e memes que quebram
              a a imersão..
            </TextLarge>

            <TextLarge>
              Cyberpunk não é nem de longe uma história feliz, os finais tem
              consequência e a diferença entre eles é o quanto mais triste você
              fica. Meu primeiro final, achei que seria o com menos
              consequências, e me arrependi quando vi no que desenrolou, depois
              fiz outros finais também.
            </TextLarge>

            <TextLarge>
              A maior parte das coisas em Cyberpunk são pontos altos e baixos ao
              mesmo tempo, infelizmente, muito potencial foi desperdiçado, para
              min esse jogo poderia ser um dos melhores jogos já feitos,
              infelizmente, são muitos problemas.
            </TextLarge>

            <TextLarge>
              Mesmo com todos esses problemas, eu acho que Cyberpunk merece um
              9, mesmo com todos os problemas, o jogo tem uma cidade incrível e
              unica, tem personagens cativantes, cenas de arrepiar, cenas
              nogentas (extremamente bem feitas), tem uma otimização surreal e
              tem mecânicas incríveis que permitem o personagem fazer muitas
              coisas extraordinárias. Estou louco para um Cyberpunk 2077 parte
              2.
            </TextLarge>
          </section>
        ),
        media: {
          imagem: Cyberpunk,
        },
      },
      {
        title: "Um vídeo perfeito recheado de spoilers da comunidade",
        description: "",
        media: {
          youtube: "mtSmAqwiuKY",
        },
      },
      {
        title: "Um vídeo andando pelos arredores dessa cidade maravilhosa",
        description:
          "Torço demais para um cyberpunk 2, se eles tiverem aprendido, vai ser fácil o jogo do ano",
        media: {
          youtube: "dd0XckIHKFY",
        },
      },
    ],
  },

  {
    id: "7",
    name: "Valorant",
    classificação: "excelente",
    conteudo: [
      {
        title: "Uma imagem da minha jogatina",
        description: (
          <section>
            <TextLarge>
              Se você está em busca de tranquilidade, talvez o Valorant não seja
              a melhor opção. No entanto, se você já aceitou que os jogos de FPS
              podem ser desafiadores às vezes, então pode valer a pena
              experimentá-lo.
            </TextLarge>

            <TextLarge>
              O jogo é muito interessante e trás uma nova perspectiva para jogos
              FPS, a história do jogo é legal, contada principalmente através de
              vídeos no Youtube e eu fico muito feliz com todo o Carinho que a
              Riot Games colocou na Baiana Raze, minha duelista favorita. “Ai,
              tu broco”
            </TextLarge>

            <TextLarge>
              Valorant tem muitos inúmeros problemas com a comunidade, de
              'smurfs' a pessoas tóxicas, e não tem muito o que fazer, vários
              FPS também tem esse problema e no Valorant não é diferente, se não
              pior.
            </TextLarge>

            <TextLarge>
              Mesmo com tudo isso, eu realmente gosto de Valorant, é o meu FPS
              favorito atualmente.
            </TextLarge>

            <TextLarge>
              Na minha opinião, dou nota 10 ao Valorant pelo jogo em si
              descartando todos os problemas com a comunidade.
            </TextLarge>
          </section>
        ),
        media: {
          imagem: Valorant,
        },
      },
      {
        title: "Ace do manito, GO LOUD",
        description: (
          <TextLarge>
            Esse foi um dos momentos mais insanos que acompanhei, foi
            maravilhosos ver isso ao vivo, sem palavras
          </TextLarge>
        ),

        media: {
          youtube: "4jNKWj-JYjY",
        },
      },

      {
        title: "Die For You // Videoclipe oficial // VALORANT Champions 2021",
        description: (
          <section>
            <TextLarge>
              Um dos melhores vídeos já feitos de Valorant, ele foi feito para o
              Champions de 2021, e basicamente mostra os agentes achando que
              toda a responsabiliade é deles, e aos poucos eles percebendo que
              não conseguem dar conta, e vão passando o controle para os
              jogadores, e então vemos os jogadores controlando os agentes.
            </TextLarge>
            <TextLarge>
              Eu não sou bom de explicações, mas esse vídeo é maravilhoso.
            </TextLarge>
          </section>
        ),
        media: {
          youtube: "h7MYJghRWt0",
        },
      },

      {
        title: "VALORANT | REVELAÇÃO // Animação do Episódio 6",
        description: "",
        media: {
          youtube: "a4ccvu52uDY",
        },
      },

      {
        title: "VALORANT | ESTILHAÇOS - Animação do Episódio 5: DIMENSÃO",
        description: "",
        media: {
          youtube: "yH2Oip06klQ",
        },
      },

      {
        title: "VALORANT | AQUECIMENTO - Animação do Episódio 4",
        description: "",
        media: {
          youtube: "8MwJ2ZABa2I",
        },
      },

      {
        title: "RETOMADA // Animação do Episódio 2 de VALORANT",
        description: "",
        media: {
          youtube: "UHFha439Rt8",
        },
      },

      {
        title: "VALORANT | DUALIDADE - Animação Oficial da História",
        description: "",
        media: {
          youtube: "sE3UqyzKR30",
        },
      },

      {
        title: "Uma edição incrível do Zishu - Cupid 💘🔥 ( Valorant Montage )",
        description: "",
        media: {
          youtube: "mQgK_U5A0Ws",
        },
      },

      {
        title:
          "Uma edição incrível do tteuw ENEMY 😈 (Valorant RADIANT montage)",
        description: "",
        media: {
          youtube: "X2TSeT-0XyY",
        },
      },

      {
        title:
          "Mais uma edição maravilhosa do Beggin Zishu 🙏🔥 (Valorant Montage)",
        description: "",
        media: {
          youtube: "vQqU0F8vTOE",
        },
      },
      {
        title:
          "Edição da RIOT GAMES maravilhosa com a Raze, muito feliz com a Riot dando essa Moral ao Brasil.  VALORANT | Raze: A Cor da Cidade",
        description: "",
        media: {
          youtube: "Pka9k_elCkA",
        },
      },

      {
        title:
          "Edição da RIOT GAMES perfeita com a Raze, feliz de mais heheh VALORANT | Raze - O que for bom!",
        description: "",
        media: {
          youtube: "L36C5IoA0KA",
        },
      },
    ],
  },

  {
    id: "6",
    name: "Far Cry 3",
    classificação: "obra de prima",
    conteudo: [
      {
        title: "Uma imagem da comunidade de Far Cry 3",
        description: (
          <section>
            <TextLarge>
              Tenho muito carinho por esse game, ele abriu os caminhos para esse
              estilo de jogo, é muito bem feito, tem personagens cativantes, um
              vilão insano.
            </TextLarge>

            <TextLarge>
              Um dos aprendizados que tive é que você precisa de recompensar o
              jogador quando ele cumpre um desafio, exemplo, subir em uma
              montanha. Em diversos momentos eu subia em uma montanha querendo
              achar uma asa delta, e na maioria das vezes, elas estava lá, o que
              foi uma sensação muito boa
            </TextLarge>

            <TextLarge>
              O final do jogo para min é muito ruim, já que deixa algumas coisas
              implícitas e não deixa a gente se certificar que acabou, o que não
              faz sentido nenhum considerando tudo o que o personagem passou.
            </TextLarge>

            <TextLarge>
              Para min, esse é um jogo fantástico, tudo nele funciona muito bem
              (tirando o final), e para min é uma obra de arte também.
            </TextLarge>

            <TextLarge>
              Para min, um 10, jogo muito bom, para a época, apesar do final
            </TextLarge>
          </section>
        ),
        media: {
          imagem: farcry3,
        },
      },
    ],
  },

  {
    id: "5",
    name: "GTA San Andreas",
    classificação: "obra de prima",
    conteudo: [
      {
        title: "Apenas uma imagem da comunidade de GTA San Andreas",
        description: (
          <section>
            <TextLarge>
              Um dos meus jogos favoritos já lançados, e que conseguiu ficar
              ainda melhor com o tempo, principalmente com os canais brasileiros
              de GTA San Andreas.
            </TextLarge>
            <TextLarge>
              Personagens incríveis, cenários extraordinários, radios
              maravilhosas, e um protagonista memorável e que provou que a
              Rockstar poderia superar o GTA 3 e os anteriores.
            </TextLarge>
            <TextLarge>
              Até hoje (2023), o jogo é incrível, e recheado de coisas para
              fazer, o que tornam ainda melhor.
            </TextLarge>

            <TextLarge>
              Para min, um 10, tanto para aquela época, quanto para a de 2023.
            </TextLarge>
          </section>
        ),
        media: {
          imagem: gtasa,
        },
      },
    ],
  },
  {
    id: "4",
    name: "GTA 3",
    classificação: "obra de prima",
    conteudo: [
      {
        title: "Apenas uma imagem de uma gameplay",
        description: (
          <section>
            <TextLarge>
              Este é um dos melhores jogos já feito na história, não
              considerando os jogos atuais, mas sim para a época dessa
              maravilha, ele revolucionou a industria de games e mesmo hoje eu
              tenho muitas boas lembranças dessa obra de arte.
            </TextLarge>
            <TextLarge>
              O final é insano, e da uma conclusão para uma das melhores
              personagens do GTA San Andreas, lançado depois.
            </TextLarge>
            <TextLarge>
              Para min, um 10, para a época dele, um jogo perfeito,
              revolucionário e o que deu origem aos GTA’s como conhecemos.
              Atualmente bastante coisa incomoda no jogo, mas sempre que jogo,
              considero o periodo que ele foi lançado e as limitações da época
            </TextLarge>
          </section>
        ),
        media: {
          imagem: gta3,
        },
      },
      {
        title: "Um vídeo da Rockstar, digno desse jogo",
        description: "",
        media: {
          youtube: "PtbUORusNvo",
        },
      },

      {
        title: "Um vídeo meu voando pelas três ilhas do jogo",
        description:
          "Ao contrários do que alguns jogadores pensam, o DODO é funcional, e da para voar infinitamente com ele sem nenhum tipo de código ou MOD. O segredo são as puxadas para baixo, ao puxar para baixo, a fisica do DODO responde empurrando o avião um pouco mais para cima, quanto maior a puxada para baixo, maior é o efeito para cima, controlando isso, é possível voar infinitamente",
        media: {
          youtube: "NbRxQt4zZBU",
        },
      },
    ],
  },

  {
    id: "3",
    name: "Call of Duty 4: Modern Warfare",
    classificação: "excelente",
    conteudo: [
      {
        title: "Uma imagem da comunidade de Cod 4",
        description: (
          <section>
            <TextLarge>
              Este jogo me trás muitas lembranças de raiva, pois, fui burro, e
              joguei a campanha toda no modo veterano, foi muito difícil para
              min nessa época, apanhei muito, mas consegui zera-lo.
            </TextLarge>

            <TextLarge>
              A missão em Chernobyl mesmo, a qual ficamos cercados após o ataque
              com sniper, consegui passar por todos os soldados usando flash
              bangs, estourando 3 em momentos especificos enquanto corria entre
              eles, foi a unica forma que consegui passar dessa fase, isso, após
              tentar diversas vezes enfrentar todos e descarregar TODAS as
              minhas balas de todas as armas. O jogo tem esse tipo de problema
              com spawn infinito ao que parece.
            </TextLarge>

            <TextLarge>
              O jogo tem vários momentos de guerra e tem cenários incríveis, que
              faz a gente se sentir em uma guerra de verdade, com a diferença
              que o personagem tem cura e você pode tentar novamente rs, na vida
              real eu teria ido para o ralo no comecinho.
            </TextLarge>

            <TextLarge>
              Para min, um 10, não é perfeito, mas tem seu publico e atende
              muito bem, meus problemas foram devido dificuldade que não me
              atentei, e tudo ficou mais complicado.
            </TextLarge>
          </section>
        ),
        media: {
          imagem: cod4,
        },
      },
    ],
  },
  {
    id: "2",
    name: "Guitar Hero III",
    classificação: "excelente",
    conteudo: [
      {
        title: "Uma imagem da comunidade de guitarhero",
        description: (
          <section>
            <TextLarge>
              Mais um jogo que tenho muito carinho, só fui jogar ele a pouco
              tempo em um emulador de PS2, e é um jogo maravilhoso e divertido
            </TextLarge>
            <TextLarge>
              Acho que a qualidade das musicas é um diferencial importante, pois
              a maioria das musicas são bem interessantes.
            </TextLarge>
            <TextLarge>
              Os detalhes musicais foram bem feitos, mesmo que o clique meu
              represente apenas um toque da musica, sendo que em um segundo ela
              pode ter vários toques, o toque foi bem encaixado, de uma forma
              que parece
            </TextLarge>
            <TextLarge>
              Recomendo começar com dificuldade baixa e ir evoluindo a cada vez
              que você zerar, pelo menos para min que não estava acostumado no
              controle, foi bem complicado no inicio até no fácil.
            </TextLarge>
          </section>
        ),
        media: {
          imagem: guitarhero,
        },
      },
    ],
  },
  {
    id: "1",
    name: "Crysis 1 Original",
    classificação: "ok",
    conteudo: [
      {
        title: "Uma imagem da comunidade de Crysis",
        description: (
          <section>
            <TextLarge>
              Esse jogo na verdade não tem muita coisa em especial, mas, me
              atraiu muito o ambiente e personagem com suas habilidades insanas.
            </TextLarge>

            <TextLarge>
              Consegui rodar esse game com todos os gráficos no mínimo, e em uma
              das ultimas missões tive que fazer olhando para o chão e ficando
              atrás de uma caixa, pois se eu olhasse para a luz, o notebook não
              aguentava e crashava.
            </TextLarge>

            <TextLarge>
              De qualquer forma, o jogo tem o seu valor e é incrível também.
            </TextLarge>

            <TextLarge>
              Para min, um 7, pela má otimização e decisões de história
              questionáveis, várias vezes eu tinha a percepção de ter algo me
              limitando (o mundo aberto falso), e decisões do tipo, agora você
              tem que entrar no portal rumo a sua morte porque agora tem uma
              parede invisível que surgiu do nada atrás de você, e eu sem
              entender nada e indignado com a situação.
            </TextLarge>
          </section>
        ),
        media: {
          imagem: crysis,
        },
      },
    ],
  },
];
