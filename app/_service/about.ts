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

const imageAvatar = "/images/Palamar.png";

export const getAbout = async (): Promise<AboutProps> => {
  return {
    title: "About me",
    description: [
      "My name is Aleksander Palamar, better known as Palamar I am 41 years old.", 
      "I'm a full-stack programmer with 6 years of experience with these technologies: HTML, CSS, JavaScript, Typescript,",
      "TailwindCss, React, NextJS, NodeJS, MongoDB, MySQL, PostgreSQL, Docker, Git, Linux, AWS, Azure, GCP, Vercel,", 
      "NetlifyThroughout my career, I've worked as a freelancer, in marketing agencies and in technology companies,",
      "gaining experience in agile methodologies such as Scrum and Kanban. I'm available to contribute my expertise in JavaScript,",
      "TypeScript, NextJs, and NodeJs.I'm passionate about technology, and I love learning new things,", 
      "and sharing what I've learned with others, through articles, on my blog.",
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
        title: "Technical support",
        company: "Positivo Informática • Curitiba/PR",
        date: "mar 2007 - nov 2011 • 4 Years",
      },
    ],
    educations: [
      {
        course: "ReactJS Specialization",
        institution: "Rocketseat • Remoto",
        date: "2022 - 2023 • 1 Year",
      },
      {
        course: "Bachelor's Degree in Business Administration",
        institution: "Dom Bosco Faculty • Curitiba/PR",
        date: "2011 - 2015 • 4 Years",
      },
      {
        course: "Analyst and Development of Systems",
        institution: "Technological Faculty (FATEC) • Curitiba/PR",
        date: "2008 - 2010 • 2 Years",
      },
      {
        course: "Computer Network Administration",
        institution: "HCI - Technical School • Curitiba/PR",
        date: "2004 - 2006 • 2 Years",
      },
    ],
  };
};
