"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

type LabelItemProps = {
  label: string;
  icon?: string;
  className?: string;
};

const labelItem = [
  {
    label: "React",
    icon: "https://reactjs.org/favicon.ico",
    className: "bg-sky-500/10 text-sky-500 hover:bg-sky-500/20 transition-all",
  },
  {
    label: "Next.js",
    icon: "https://nextjs.org/static/favicon/favicon-32x32.png",
    className:
      "bg-gray-950/10 text-gray-950 dark:text-gray-100 hover:bg-gray-950/20 transition-all",
  },
  {
    label: "Javascript",
    icon: "https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png",
    className:
      "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 transition-all",
  },
  {
    label: "Tailwind",
    className:
      "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-all",
  },
  {
    label: "Typescript",
    className:
      "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-all",
  },
  {
    label: "Node.js",
    className:
      "bg-lime-500/10  text-lime-500 hover:bg-lime-500/20 transition-all",
  },
  {
    label: "MySQL",
    className: "bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all",
  },
] as LabelItemProps[];

export const BadgeComponent = () => {
  const badgeLink = () => {
    return (
      <>
        {labelItem.map((item, index) => (
          <Badge key={index} className={cn("flex items-center gap-x-2", item.className)}>
            {item.icon && <Image src={item.icon} width={20} height={20} alt={item.label} />}
            {item.label}
          </Badge>
        ))}
      </>
    );
  };

  return <div className="flex space-x-2">{badgeLink()}</div>;
};
