import pravalerImage from './assets/jobs/pravaler.webp';
import fmxImage from './assets/jobs/fmx.webp';
import workanaImage from './assets/jobs/workana.webp';
import { dataListIntroductionType } from './screens/types';

export const dataJob: dataListIntroductionType[] = [
  {
    title: 'Pravaler - Desenvolvedor front-end júnior',
    subtitle: 'DESENVOLVEDOR - 2021 -',
    description:
      'Atuo no desenvolvolvimento de um portal institucional, usando várias boas práticas, como clean code, refatoração e testes, atuando também no desenvolvimento de novas features, melhorias e correções de problemas',
    image: pravalerImage,
  },
  {
    title: 'Workana – Desenvolvedor Python',
    subtitle: 'FREELANCER - 2021 - 2021',
    description: 'Desenvolvi duas APIs usando Python e flask para projetos diversos',
    image: workanaImage,
  },

  {
    title: 'FMX / VSA - Desenvolvedor WDG',
    subtitle: 'ESTÁGIO COMO DESENVOLVEDOR RPA - 2019 - 2021',
    description:
      'Fazia o desenvolvimento de projetos de RPA usando a ferramenta WDG, fazia homologação, subida para produção, atendimento de clientes e suporte no geral',
    image: fmxImage,
  },
];
