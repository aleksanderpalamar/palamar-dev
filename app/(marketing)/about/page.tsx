"use client";

import Image from "next/image";
import { CTA } from "../_components/cta";
import { getAbout } from "@/app/_service/about";
import { StackCards } from "../_components/stack-cards";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";

const AboutPage = () => {
  const { language } = useContext(LanguageContext);

  async function About() {
    const about = await getAbout();
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center">
        <div className="container max-w-[73rem] space-y-4 mb-2">
          <h1 className="flex flex-col text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-4 text-left ">
            {language === "en" ? "About" : "Sobre"}
          </h1>
          <div className="flex flex-col md:flex-row justify-around gap-4 animate-fade-left">
            <div className="bg-transparent rounded-xl w-80 h-80 flex items-center overflow-hidden border-4 border-violet-500">
              <Image
                src={about.image}
                width={500}
                height={500}
                alt="Me"
                className="w-full h-full object-cover bg-violet-500 border-8 border-zinc-900 rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="bg-transparent rounded w-full h-full space-y-4 text-justify overflow-hidden">
              <p className="text-sm font-normal">
                {language === "en"
                  ? "My name is Aleksander Palamar, better known as Palamar, I'm 41 years old. I'm a full-stack programmer with 6 years of experience with these technologies: HTML, CSS, JavaScript, Typescript, TailwindCss, React, NextJS, NodeJS, MongoDB, MySQL, PostgreSQL, Docker, Git, Linux, AWS, Azure, GCP, Vercel, NetlifyThroughout my career, I have worked as a freelancer, in marketing agencies and technology companies, gaining experience in agile methodologies such as Scrum and Kanban. I am available to contribute my knowledge in JavaScript, TypeScript, NextJs and NodeJs. I'm passionate about technology and I love learning new things and sharing what I've learned with other people, through articles, on my blog."
                  : "Meu nome é Aleksander Palamar, mais conhecido como Palamar, tenho 41 anos.Sou um programador full-stack com 6 anos de experiência com estas tecnologias: HTML, CSS, JavaScript, Typescript,TailwindCss, React, NextJS, NodeJS, MongoDB, MySQL, PostgreSQL, Docker, Git, Linux, AWS, Azure, GCP, Vercel,NetlifyAo longo da minha carreira, trabalhei como freelancer, em agências de marketing e em empresas de tecnologiaadquirindo experiência em metodologias ágeis como Scrum e Kanban. Estou à disposição para contribuir com meu conhecimento em JavaScript,TypeScript, NextJs e NodeJs. Sou apaixonado por tecnologia e adoro aprender coisas novase compartilhar o que aprendi com outras pessoas, por meio de artigos, no meu blog."}
              </p>
            </div>
          </div>
          <StackCards />
          <div className="bg-transparent rounded flex flex-col md:flex-row px-3 py-4 md:gap-x-4 gap-y-4 animate-fade-right">
            <div className="flex flex-col w-full h-full p-2">
              <h1 className="text-2xl font-bold">
                {language === "en" ? "Professional experience" : "Experiência Profissional"}
              </h1>
              {about.jobs.map((job) => (
                <div key={job.title} className="flex flex-col space-y-2">
                  <h2 className="text-lg font-bold">{job.title}</h2>
                  <p className="text-base text-zinc-500">{job.company}</p>
                  <p className="text-sm text-zinc-500">{job.date}</p>
                </div>
              ))}
            </div>
            <div className="border-t-2 md:border-r-2 border-zinc-700" />
            <div className="flex flex-col w-full h-full p-2">
              <h1 className="text-2xl font-bold">
                {language === "en" ? "Academic Training and Complementary Courses" : "Formação Acadêmica e Cursos Complementares"}
              </h1>
              {about.educations.map((education) => (
                <div key={education.course} className="flex flex-col space-y-2">
                  <h2 className="text-lg font-bold">{education.course}</h2>
                  <p className="text-base text-zinc-500">
                    {education.institution}
                  </p>
                  <p className="text-sm text-zinc-500">{education.date}</p>
                </div>
              ))}
            </div>
          </div>
          <CTA />
        </div>
      </div>
    );
  }

  return <About />;
};

export default AboutPage;
