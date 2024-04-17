"use client";

import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa6";
import { SiJavascript, SiTypescript, SiDocker, SiMysql, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FcLinux } from "react-icons/fc";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";


export const StackCards = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="h-full rounded-md flex flex-col antialiased justify-center relative overflow-hidden animate-fade-left">
      <h2 
        className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-20"
      >
        {language === "en"? "Stacks" : "Minhas Tecnologias"}
      </h2>
      <InfiniteMovingCards 
        items={stackitems}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

const stackitems = [
  {
    icon: <FaReact size={32} className="text-5xl text-blue-500" />,
    name: "React.js",
    href: "https://reactjs.org/",
  },
  {
    icon: <SiJavascript size={32} className="text-5xl text-yellow-500" />,
    name: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: <SiTypescript size={32} className="text-5xl text-blue-500" />,
    name: "Typescript",
    href: "https://www.typescriptlang.org/",
  },
  {
    icon: <FaNodeJs size={32} className="text-5xl text-green-500" />,
    name: "Node.js",
    href: "https://nodejs.org/en/",
  },
  {
    icon: <Image src="/assets/next-js.svg" alt="Next.Js" width={32} height={32} />,
    name: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    icon: <SiTailwindcss size={32} className="text-5xl text-cyan-500" />,
    name: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },
  {
    icon: <SiDocker size={32} className="text-5xl text-blue-700" />,
    name: "Docker",
    href: "https://www.docker.com/",
  },
  {
    icon: <FaGitAlt size={32} className="text-5xl text-red-500" />,
    name: "Git",
    href: "https://git-scm.com/",
  },
  {
    icon: <FcLinux size={32}/>,
    name: "Linux",
    href: "https://www.linux.org/",
  },
  {
    icon: <SiMysql size={32} className="text-5xl text-blue-500" />,
    name: "MySQL",
    href: "https://www.mysql.com/",
  },
  {
    icon: <SiMongodb size={32} className="text-5xl text-green-600" />,
    name: "MongoDB",
    href: "https://www.mongodb.com/",
  }
];