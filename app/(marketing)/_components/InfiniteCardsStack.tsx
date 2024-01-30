/* eslint-disable @next/next/no-img-element */
"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiMysql, SiMongodb, SiGraphql, SiTailwindcss } from "react-icons/si";
import { FcLinux } from "react-icons/fc";

export const InfiniteCardsStack = () => {
  return (
    <div className="h-[10rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards 
        items={stackitems}
        direction="left"
        speed="slow"
      />
    </div>
  )
}

const stackitems = [
  {
    title: "React.js",
    icon: <FaReact 
      size={50} 
      className="text-sky-500"
    />,   
  },
  {
    title: "JavaScript",
    icon: <IoLogoJavascript 
      size={50}
      className="text-yellow-500"
    />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript 
      size={50} 
      className="text-blue-500"
    />,
  },
  {
    title: "Node.js",
    icon: <FaNodeJs 
      size={50} 
      className="text-green-500"
    />,
  },
  {
    title: "Next.js",
    icon: <Image 
      src="/assets/next-js.svg" 
      alt="Next.js" 
      width={50} 
      height={50}
    />
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss 
      size={50} 
      className="text-cyan-500"
    />,
  },
  {
    title: "GraphQL",
    icon: <SiGraphql 
      size={50} 
      className="text-pink-500"
    />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb 
      size={50} 
      className="text-green-600"
    />,
  },
  {
    title: "MySQL",
    icon: <SiMysql 
      size={50} 
      className="text-blue-600"
    />,
  },
  {
    title: "Docker",
    icon: <FaDocker 
      size={50} 
      className="text-blue-500"
    />
  },
  {
    title: "Git",
    icon: <FaGitAlt 
      size={50} 
      className="text-red-500"
    />
  },
  {
    title: "Linux",
    icon: <FcLinux 
      size={50}
    />
  }
];