import axios from "axios"

type AboutProps = {
  title: string;
  description: (string)[];
  image: string;
  jobs: {
    title: string;
    company: string;
    date: string;
  }[],
  educations: {
    course: string;
    institution: string;
    date: string;
  }[],
}

const imageAvatar = "/images/Palamar.png"

export const getAbout = async (): Promise<AboutProps> => {
  
  
  return {
    title: 'Sobre mim',
    description: [
      'Meu nome é Aleksander Palamar, mais conhecido como Palamar tenho 41 anos.',"\n",
      'Sou programador full-stack com 6 anos de experiência com essas tecnologias: HTML, CSS, JavaScript, Typescript, TailwindCss, React, NextJS, NodeJS, MongoDB, MySQL, PostgreSQL, Docker, Git, Linux, AWS, Azure, GCP, Vercel, Netlify',
      'Ao longo da minha carreira, trabalhei como freelancer, em agências de marketing e em empresas de tecnologia, adquirindo experiência em metodologias ágeis, como Scrum e Kanban. estou disponivel para contribuir com minhas expertise em JavaScript, TypeScript, NextJs, e NodeJs.',
      'Sou apaixonado por tecnologia, e adoro aprender coisas novas, e compartilhar o que aprendi com outras pessoas, através de artigos, no meu blog.',
    ], 
    image: imageAvatar,
    jobs: [
      {
        title: "Desenvolvedor FullStack",
        company: "healthtechportugal.com • Portugal • Remoto",
        date: "jul 2022 - atualmente",
      },
      {
        title: "Desenvolvedor Freelancer • FullStack",
        company: "nerdweb • Curitiba/PR",
        date: "set 2016 - jun 2022 • 6 anos",
      },
      {
        title: "Suporte técnico",
        company: "Positivo Informática • Curitiba/PR",
        date: "mar 2007 - nov 2011 • 4 anos",
      },            
    ],
    educations: [
      {
        course: "Especialização em ReactJS",
        institution: "Rocketseat • Remoto",
        date: "2022 - 2023 • 1 ano",
      },
      {
        course: "Bacharelado Administração",
        institution: "Faculdade Dom Bosco • Curitiba/PR",
        date: "2011 - 2015 • 4 anos",
      },
      {
        course: "Desenvolvimento de Sistemas",
        institution: "Faculdade Tecnologica (FATEC) • Curitiba/PR",
        date: "2008 - 2010 • 2 anos",
      },
      {
        course: "Administração de Redes de Computadores",
        institution: "HCI - Escola Técnica • Curitiba/PR",
        date: "2004 - 2006 • 2 anos",
      },
    ]       
  }
}