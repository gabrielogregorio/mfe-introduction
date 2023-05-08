import { Link } from "react-router-dom";
import { BaseLayout } from "./baseLayout";

type ItemsProps = {
  images: string[];
  title: string;
  subtitle: string;
  content?: string;
  download?: string;
};

const Items = ({ images, title, subtitle, content, download }: ItemsProps) => {
  return (
    <BaseLayout>
      <header>
        <div>
          {images.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                width={30}
                height={30}
                alt=""
                className="h-[30px] w-[30px] object-cover rounded-full"
              />
            );
          })}
        </div>

        <div>
          <h3>{title}</h3>

          <p>{subtitle}</p>
        </div>

        <div>
          {download ? (
            <a href={download} target="_blank" referrerPolicy="no-referrer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                className="transition duration-300 text-blue-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"></path>
              </svg>
            </a>
          ) : undefined}
        </div>
      </header>

      <div>{content ? <div>{content}</div> : undefined}</div>
    </BaseLayout>
  );
};

import danki from "./assets/danki.webp";
import dsa from "./assets/dsa.webp";
import fatec from "./assets/fatec.webp";
import fmx from "./assets/fmx.webp";
import ibm from "./assets/ibm.webp";
import jbb from "./assets/jbb.webp";
import mirin from "./assets/mirin.webp";
import pravaler from "./assets/pravaler.webp";
import senai from "./assets/senai.webp";
import udemy from "./assets/udemy.webp";
import vsa from "./assets/vsa.webp";
import workana from "./assets/workana.webp";

export const About = () => {
  return (
    <BaseLayout>
      <div className="flex items-center justify-center mt-[78px]">
        <Link
          to={"/"}
          type="button"
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
          <section className="flex items-center justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/48621655?s=400&u=8d11d15f533053597c354e57e0ed0fbb453c175b&v=4"
              alt="gregorio profile"
              className="w-[171px] h-[171px] object-cover rounded-[20px] mr-[15px]"
            />{" "}
            <div>
              <h1 className="font-[600] text-[12px]">
                Olá, sou o Gabriel Gregório, sou desenvolvedor frontend web
              </h1>
              <div className="font-[400] text-[12px]">
                <br />
                <p>
                  Gosto muito de explorar as mais diversas áreas do
                  desenvolvimento de softeares, e este projeto inteiro tem esse
                  objetivo, neste caso, explorar microfrontends. Sim, o que você
                  está vendo aqui, foi criado com base em microrfontends.
                </p>

                <br />
                <p>
                  Atualmente trabalho na Pravaler como desenvolvedor frontend
                  pleno.
                </p>

                <br />

                <p>
                  Sou bastante eclético, gosto de fazer várias coisas,
                  desenvolver software, atualmente é a minha preferida.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-[600] text-[12px]">Estatisticas</h2>

            <div className="font-[400] text-[12px]">
              <br />
              <p>
                Tenho mais de duas mil horas programando, abaixo você pode
                acompanhar meu status no wakatime. Eu demorei para registrar
                minhas métricas e conhecer o wakatime, então todas essas
                métricas estão abaixo so valores reais.
              </p>
            </div>
          </section>

          <section>
            <br />
            <h2 className="font-[600] text-[12px]">Tópicos de interesse</h2>
            <div className="font-[400] text-[12px]">
              <br />
              <p>
                Mesmo lidando com frontend, particulamente eu tenho uma quedinha
                pelo lado técnicos da coisa, como otmização, qualidade de
                código, etc. Abaixo seguem alguns tópicos de interesse:
                Qualidade de código com eslint, preetier, codacy e sonarjs.
              </p>
              <ul className="list-disc ml-4">
                <li>Commit lint e husky</li>
                <li>github actions e ci/cd</li>
                <li>
                  testes automatizados unitários com jest, react testing library
                  ou vitest
                </li>
                <li>
                  testes automatizados end to end, minha maior experiência é com
                  Cypress.
                </li>
              </ul>
              <br />
              <p>
                Lembrando que são as ferramentas que usei, sempre estou disposto
                a prender novas.
              </p>
              <br />
              <p>De frontend em si, seguem alguns tópicos de interesse.</p>
              <ul className="list-disc ml-4">
                <li>Tailwind Css</li>
                <li>Typescript</li>
                <li>nextjs</li>
                <li>vite</li>
                <li>react</li>
              </ul>
            </div>
          </section>

          <section>
            <br />
            <h2 className="font-[600] text-[12px]">Extras</h2>
            <br />
            <div className="font-[400] text-[12px]">
              <ul className="list-disc ml-4">
                <li>Nasci em 1998</li>
                <li>Sou Brasileiro</li>
              </ul>
            </div>
          </section>
          <div className="h-[390px]"></div>
        </div>
      </div>
    </BaseLayout>
  );
};
