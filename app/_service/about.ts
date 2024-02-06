type AboutProps = {
  title: string;
  description: string[];
  image: string;
  jobs: {
    title: string;
    company: string;
    date: string;
  }[];
  educations: {
    course: string;
    institution: string;
    date: string;
  }[];
};

const imageAvatar = "/images/palamar.png";

export const getAbout = async (): Promise<AboutProps> => {
  return {
    title: "Sobre mim",
    description: [
      "Meu nome é Aleksander Palamar, mais conhecido como Palamar, tenho 41 anos.",
       "Sou um programador full-stack com 6 anos de experiência com estas tecnologias: HTML, CSS, JavaScript, Typescript,",
       "TailwindCss, React, NextJS, NodeJS, MongoDB, MySQL, PostgreSQL, Docker, Git, Linux, AWS, Azure, GCP, Vercel,",
       "NetlifyAo longo da minha carreira, trabalhei como freelancer, em agências de marketing e em empresas de tecnologia",
       "adquirindo experiência em metodologias ágeis como Scrum e Kanban. Estou à disposição para contribuir com meu conhecimento em JavaScript,",
       "TypeScript, NextJs e NodeJs. Sou apaixonado por tecnologia e adoro aprender coisas novas",
       "e compartilhar o que aprendi com outras pessoas, por meio de artigos, no meu blog.",
    ],
    image: imageAvatar,
    jobs: [
      {
        title: "FullStack Developer",
        company: "healthtechportugal.com • Portugal • Remoto",
        date: "jul 2022 - Present",
      },
      {
        title: "Freelance Developer • FullStack",
        company: "nerdweb • Curitiba/PR",
        date: "set 2016 - jun 2022 • 6 Years",
      },
      {
        title: "Suporte Técnico",
        company: "Positivo Informática • Curitiba/PR",
        date: "mar 2007 - nov 2011 • 4 Years",
      },
    ],
    educations: [
      {
        course: "Formação em ReactJS",
        institution: "Rocketseat • Remoto",
        date: "2022 - 2023 • 1 Ano",
      },
      {
        course: "Bacharelado em Administração",
        institution: "Faculdade Dom Bosco • Curitiba/PR",
        date: "2011 - 2015 • 4 Anos",
      },
      {
        course: "Analise e Desenvolvimento de Sistemas",
        institution: "Faculdade de Tecnologia (FATEC) • Curitiba/PR",
        date: "2008 - 2010 • 2 Anos",
      },
      {
        course: "Admnistração de Redes de Computadores",
        institution: "HCI - Escola Técnica • Curitiba/PR",
        date: "2004 - 2006 • 2 Anos",
      },
    ],
  };
};
