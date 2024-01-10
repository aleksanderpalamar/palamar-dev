/* eslint-disable @next/next/no-img-element */

import { CTA } from "../_components/cta";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center dark:bg-zinc-900">
      <div className="max-w-6xl p-2 space-y-4">
        <h1 className="flex flex-col text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-40 text-left ">
          Sobre mim
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-around gap-4 animate-fade-left">
          <div className="bg-zinc-800 rounded w-full h-full overflow-hidden">
            <img
              src="/images/favicon.png"
              alt="Me"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-transparent rounded w-full h-full justify-start space-y-4 px-3 py-4 text-justify">
            <p className="">
              Meu nome é Aleksander Palamar, mais conhecido como Palamar tenho
              41 anos.
            </p>
            <p>
              Sou programador full-stack com 6 anos de experiência com essas
              tecnologias: HTML, CSS, JavaScript, Typescript, TailwindCss,
              React, NextJS, NodeJS, MongoDB, MySQL, PostgreSQL, Docker, Git,
              Linux, AWS, Azure, GCP, Vercel, Netlify
            </p>
            <p>
              Ao longo da minha carreira, trabalhei como freelancer, em agências
              de marketing e em empresas de tecnologia, adquirindo experiência
              em metodologias ágeis, como Scrum e Kanban. estou disponivel para
              contribuir com minhas expertise em JavaScript, TypeScript, NextJs,
              e NodeJs.
            </p>
            <p>
              Além disso eu gosto de escrever artigos técnicos sobre as minhas
              experiências e compartilhar conhecimento no meu{" "}
              <Link href="/blog
              ">blog</Link>.
            </p>
          </div>
        </div>
        <div className="bg-transparent rounded flex flex-col w-full h-[280px] px-3 py-4">
          <h1 className="text-2xl font-bold">Carreira</h1>
          <div>
            <h1 className="text-xl font-bold">Desenvolvedor FullStack</h1>
            <p className="text-zinc-500 text-sm">healthtechportugal.com • Portugal • Remoto</p>
            <p className="text-zinc-500 text-sm">jul 2022 - atualmente</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">Desenvolvedor Freelancer • FullStack</h1>
            <p className="text-zinc-500 text-sm">nerdweb • Curitiba/PR</p>
            <p className="text-zinc-500 text-sm">set 2016 - jun 2022 • 6 anos</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">Suporte técnico</h1>
            <p className="text-zinc-500 text-sm">Positivo Informática • Curitiba/PR</p>
            <p className="text-zinc-500 text-sm">mar 2007 - nov 2011 • 4 anos</p>
          </div>
        </div>
        <CTA />
      </div>
    </div>
  );
};

export default About;