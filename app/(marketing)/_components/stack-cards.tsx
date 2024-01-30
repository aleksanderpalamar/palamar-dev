import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa6";
import { SiJavascript, SiTypescript, SiDocker, SiMysql, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FcLinux } from "react-icons/fc";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import Image from "next/image";


export const StackCards = () => {
  return (
    <div className="h-full rounded-md flex flex-col antialiased justify-center relative overflow-hidden animate-fade-left">
      <h2 
        className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-20"
      >
        My Stack&apos;s
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
  },
  {
    icon: <SiJavascript size={32} className="text-5xl text-yellow-500" />,
    name: "Javascript",
  },
  {
    icon: <SiTypescript size={32} className="text-5xl text-blue-500" />,
    name: "Typescript",
  },
  {
    icon: <FaNodeJs size={32} className="text-5xl text-green-500" />,
    name: "Node.js",
  },
  {
    icon: <Image src="/assets/next-js.svg" alt="Next.Js" width={32} height={32} />,
    name: "Next.js",
  },
  {
    icon: <SiTailwindcss size={32} className="text-5xl text-cyan-500" />,
    name: "Tailwind CSS",
  },
  {
    icon: <SiDocker size={32} className="text-5xl text-blue-700" />,
    name: "Docker",
  },
  {
    icon: <FaGitAlt size={32} className="text-5xl text-red-500" />,
    name: "Git",
  },
  {
    icon: <FcLinux size={32}/>,
    name: "Linux",
  },
  {
    icon: <SiMysql size={32} className="text-5xl text-blue-500" />,
    name: "MySQL",
  },
  {
    icon: <SiMongodb size={32} className="text-5xl text-green-600" />,
    name: "MongoDB",
  }
];